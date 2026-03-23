import * as fs from 'fs';

const filePath = './src/app/code-snippets.ts';
let content = fs.readFileSync(filePath, 'utf8');

const medievalBlock = `/* 
================================================================================
INSTRUÇÕES DE ESTILO (TAILWIND CSS v4)
================================================================================
Copie o conteúdo abaixo e cole no seu arquivo global de estilos (ex: styles.css ou global.css).
O projeto utiliza Tailwind CSS v4 localmente.

@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Lora", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Cinzel", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;

  --color-parchment: #f4e4bc;
  --color-parchment-dark: #e8d8b0;
  --color-ink: #2c1e16;
  --color-ink-light: #4a3b32;
  --color-accent: #8b0000;
  --color-accent-hover: #660000;
  --color-gold: #d4af37;
}

body {
  background-color: var(--color-parchment);
  color: var(--color-ink);
  font-family: var(--font-sans);
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-in {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}

.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.delay-500 { animation-delay: 500ms; }
================================================================================
*/

`;

const genericBlock = `/* 
================================================================================
INSTRUÇÕES DE ESTILO (TAILWIND CSS v4)
================================================================================
Copie o conteúdo abaixo e cole no seu arquivo global de estilos (ex: styles.css ou global.css).
O projeto utiliza Tailwind CSS v4 localmente.

@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-in {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}

.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.delay-500 { animation-delay: 500ms; }
================================================================================
*/

`;

// A simple regex to find the start of the angular and nextjs strings.
// They look like: "angular": "@Component..." or "angular": "/* ... */\n\n@Component..."
// We want to replace `"angular": "@Component` with `"angular": "/* ... */\n\n@Component`
// And `"nextjs": "import React` with `"nextjs": "/* ... */\n\nimport React`

for (let i = 1; i <= 17; i++) {
  const varName = \`var\${i}\`;
  const block = (i <= 12) ? medievalBlock : genericBlock;
  
  // Escape the block for JSON string (replace newlines with \n, quotes with \")
  const escapedBlock = block.replace(/\\n/g, '\\n').replace(/"/g, '\\"');
  
  // Replace angular
  const angularRegex = new RegExp(\`("\\\${varName}":\\\\s*\\\\{\\\\s*"angular":\\\\s*")(@Component)\`, 'g');
  content = content.replace(angularRegex, \`$1\${escapedBlock}$2\`);
  
  // Replace nextjs
  const nextjsRegex = new RegExp(\`("\\\${varName}":\\\\s*\\\\{\\\\s*"angular":\\\\s*".*?",\\\\s*"nextjs":\\\\s*")(import React)\`, 'g');
  content = content.replace(nextjsRegex, \`$1\${escapedBlock}$2\`);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated code-snippets.ts');
