const fs = require('fs');

const filesToParse = [
  'src/app/setup-variations.component.ts',
  'src/app/setup-var12.component.ts',
  'src/app/setup-var13.component.ts',
  'src/app/setup-var14.component.ts',
  'src/app/setup-var15.component.ts',
  'src/app/setup-var16.component.ts',
  'src/app/setup-var17.component.ts',
  'src/app/setup-var18.component.ts',
  'src/app/setup-var19.component.ts'
];

const snippets = {};
const componentRegex = /@Component\(\{[\s\S]*?selector:\s*'app-setup-(var\d+)'[\s\S]*?template:\s*`([\s\S]*?)`\s*\}\)\s*export class (\w+)(?:\s+implements\s+[^\{]+)?\s*{([\s\S]*?)}/g;

for (const file of filesToParse) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');

  let match;
  while ((match = componentRegex.exec(content)) !== null) {
    const varId = match[1];
    const template = match[2];
    const className = match[3];
    const body = match[4];

    let cleanTemplate = template.replace(/<a href="\/rpg-templates\.zip[^>]+>[\s\S]*?<\/a>/g, '');
    cleanTemplate = cleanTemplate.replace(/<button \(click\)="showCode = true"[^>]+>[\s\S]*?<\/button>/g, '');
    cleanTemplate = cleanTemplate.replace(/@if \(showCode\) \{ <app-code-modal[^>]+><\/app-code-modal> \}/g, '');

    const angularSnippet = `@Component({\n  selector: 'app-setup-${varId}',\n  imports: [RouterLink, FormsModule],\n  template: \`${cleanTemplate}\`\n})\nexport class ${className} {${body.replace(/showCode = false;/g, '').trim()}}`;

    let nextjsCode = `import React, { useState } from 'react';\nimport Link from 'next/link';\n\n`;
    let hooks = '';
    const propRegex = /(\w+)\s*=\s*(.*?);/g;
    let propMatch;
    while ((propMatch = propRegex.exec(body)) !== null) {
      if (propMatch[1] === 'showCode') continue;
      const propName = propMatch[1];
      const propVal = propMatch[2];
      const setterName = 'set' + propName.charAt(0).toUpperCase() + propName.slice(1);
      hooks += `  const [${propName}, ${setterName}] = useState(${propVal});\n`;
    }

    let nextTemplate = cleanTemplate;
    nextTemplate = nextTemplate.replace(/class=/g, 'className=');
    nextTemplate = nextTemplate.replace(/routerLink="([^"]+)"/g, 'href="$1"');
    nextTemplate = nextTemplate.replace(/\[routerLink\]="([^"]+)"/g, 'href={$1}');
    nextTemplate = nextTemplate.replace(/<a\s+href/g, '<Link href');
    nextTemplate = nextTemplate.replace(/<\/a>/g, '</Link>');
    nextTemplate = nextTemplate.replace(/\[src\]="([^"]+)"/g, 'src={$1}');
    nextTemplate = nextTemplate.replace(/\[ngClass\]="([^"]+)"/g, 'className={`... ${$1}`}');
    nextTemplate = nextTemplate.replace(/\(click\)="(\w+)\s*=\s*([^"]+)"/g, (m, p1, p2) => {
        const setter = 'set' + p1.charAt(0).toUpperCase() + p1.slice(1);
        return `onClick={() => ${setter}(${p2})}`;
    });
    nextTemplate = nextTemplate.replace(/\(click\)="(\w+)\(\)"/g, 'onClick={$1}');
    nextTemplate = nextTemplate.replace(/\[\(ngModel\)\]="(\w+)"/g, (m, p1) => {
        const setter = 'set' + p1.charAt(0).toUpperCase() + p1.slice(1);
        return `value={${p1}} onChange={(e) => ${setter}(e.target.value)}`;
    });
    nextTemplate = nextTemplate.replace(/\{\{\s*(.*?)\s*\}\}/g, '{$1}');
    nextTemplate = nextTemplate.replace(/style="([^"]+)"/g, (m, p1) => {
        const styles = p1.split(';').filter(s => s.trim()).map(s => {
            const [k, v] = s.split(':');
            const camelK = k.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            return `${camelK}: '${v.trim()}'`;
        }).join(', ');
        return `style={{ ${styles} }}`;
    });
    nextTemplate = `{/* Note: @if and @for blocks from Angular need manual conversion to React syntax */}\n` + nextTemplate;

    nextjsCode += `export default function ${className}() {\n${hooks}\n  return (\n    <>\n${nextTemplate}\n    </>\n  );\n}\n`;

    snippets[varId] = {
      angular: angularSnippet,
      nextjs: nextjsCode
    };
  }
}

fs.writeFileSync('src/app/code-snippets.ts', `export const CODE_SNIPPETS = ${JSON.stringify(snippets, null, 2)};`);
console.log('Refactoring complete.');
