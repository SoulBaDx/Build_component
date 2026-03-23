import * as fs from 'fs';

const setupContent = fs.readFileSync('src/app/setup-var12.component.ts', 'utf-8');
const snippetsContent = fs.readFileSync('src/app/code-snippets.ts', 'utf-8');

// We want to replace the string value of "angular" inside "var12"
// Since it's a JSON string, we can stringify the setupContent
const escapedSetupContent = JSON.stringify(setupContent);

// The regex to find the "var12" block
const regex = /("var12":\s*\{\s*"angular":\s*)(?:".*?"|`[\s\S]*?`)(,\s*"nextjs":)/;

const newSnippetsContent = snippetsContent.replace(regex, `$1${escapedSetupContent}$2`);

fs.writeFileSync('src/app/code-snippets.ts', newSnippetsContent);
console.log('Updated code-snippets.ts successfully.');
