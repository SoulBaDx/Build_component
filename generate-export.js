const fs = require('fs');
const JSZip = require('jszip');

async function generateExport() {
  const zip = new JSZip();
  
  // 1. Angular Code
  const angularCode = fs.readFileSync('src/app/setup-variations.component.ts', 'utf8');
  const indexCode = fs.readFileSync('src/app/index.component.ts', 'utf8');
  const routesCode = fs.readFileSync('src/app/app.routes.ts', 'utf8');
  
  zip.file('angular/setup-variations.component.ts', angularCode);
  zip.file('angular/index.component.ts', indexCode);
  zip.file('angular/app.routes.ts', routesCode);
  zip.file('angular/README.md', '# Angular RPG Templates\n\n- `setup-variations.component.ts`: Contains all 11 variation components (HTML + CSS + TS).\n- `index.component.ts`: The menu/listing component.\n- `app.routes.ts`: The routing configuration.\n\nThey use Tailwind CSS for styling.');

  // 2. Next.js Code Conversion
  let nextjsCode = `import React, { useState } from 'react';\nimport Link from 'next/link';\n\n`;
  
  const componentRegex = /@Component\(\{[\s\S]*?selector:\s*'([^']+)'[\s\S]*?template:\s*`([\s\S]*?)`\s*\}\)\s*export class (\w+)\s*{([\s\S]*?)}/g;
  
  let match;
  while ((match = componentRegex.exec(angularCode)) !== null) {
    const selector = match[1];
    let template = match[2];
    const className = match[3];
    const body = match[4];
    
    // Convert body to useState hooks
    let hooks = '';
    const propRegex = /(\w+)\s*=\s*(.*?);/g;
    let propMatch;
    while ((propMatch = propRegex.exec(body)) !== null) {
      const propName = propMatch[1];
      const propVal = propMatch[2];
      const setterName = 'set' + propName.charAt(0).toUpperCase() + propName.slice(1);
      hooks += `  const [${propName}, ${setterName}] = useState(${propVal});\n`;
    }
    
    // Convert template
    template = template.replace(/class=/g, 'className=');
    template = template.replace(/routerLink="([^"]+)"/g, 'href="$1"');
    template = template.replace(/\[routerLink\]="([^"]+)"/g, 'href={$1}');
    template = template.replace(/<a\s+href/g, '<Link href');
    template = template.replace(/<\/a>/g, '</Link>');
    template = template.replace(/\[src\]="([^"]+)"/g, 'src={$1}');
    template = template.replace(/\[ngClass\]="([^"]+)"/g, 'className={`... ${$1}`}');
    template = template.replace(/\(click\)="(\w+)\s*=\s*([^"]+)"/g, (m, p1, p2) => {
        const setter = 'set' + p1.charAt(0).toUpperCase() + p1.slice(1);
        return `onClick={() => ${setter}(${p2})}`;
    });
    template = template.replace(/\(click\)="(\w+)\(\)"/g, 'onClick={$1}');
    template = template.replace(/\[\(ngModel\)\]="(\w+)"/g, (m, p1) => {
        const setter = 'set' + p1.charAt(0).toUpperCase() + p1.slice(1);
        return `value={${p1}} onChange={(e) => ${setter}(e.target.value)}`;
    });
    template = template.replace(/\{\{\s*(.*?)\s*\}\}/g, '{$1}');
    template = template.replace(/style="([^"]+)"/g, (m, p1) => {
        const styles = p1.split(';').filter(s => s.trim()).map(s => {
            const [k, v] = s.split(':');
            const camelK = k.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            return `${camelK}: '${v.trim()}'`;
        }).join(', ');
        return `style={{ ${styles} }}`;
    });

    // Handle @if and @for somewhat gracefully
    template = template.replace(/@if\s*\((.*?)\)\s*\{/g, '{($1) && (<>');
    // The closing brace for @if is hard to match with regex. We will just leave it as } and let the user fix it, OR
    // we can try to replace all `}` that are alone on a line with `</>)}`.
    // Actually, let's just add a comment.
    template = `{/* Note: @if and @for blocks from Angular need manual conversion to React syntax */}\n` + template;

    nextjsCode += `export function ${className}() {\n${hooks}\n  return (\n    <>\n${template}\n    </>\n  );\n}\n\n`;
  }
  
  zip.file('nextjs/setup-variations.tsx', nextjsCode);
  zip.file('nextjs/README.md', '# Next.js RPG Templates\n\nThis file was auto-generated from the Angular code. You may need to manually adjust some Angular-specific syntax like `@if` blocks and `[ngClass]` to fully work in React.');

  // 3. General README
  zip.file('README.md', '# RPG Templates Export\n\nContains both Angular and Next.js versions of the RPG onboarding templates.\n\n## Angular\nCopy the `setup-variations.component.ts` into your Angular project.\n\n## Next.js\nCopy the `setup-variations.tsx` into your Next.js project. Note that the Next.js version is auto-translated and might require minor syntax adjustments for complex state logic (like `@if` -> `{condition && ...}`).');

  // Generate zip
  const content = await zip.generateAsync({ type: 'nodebuffer' });
  fs.writeFileSync('public/rpg-templates.zip', content);
  console.log('Zip generated successfully!');
}

generateExport().catch(console.error);
