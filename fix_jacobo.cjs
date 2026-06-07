const fs = require('fs');
let content = fs.readFileSync('src/JacoboAgent.tsx', 'utf-8');
content = content.replace(/altEs:\s*.*?\s*,\s*altEn:\s*(.*?)(?=\s*,\s*width|\s*\})/g, 'alt: $1');
fs.writeFileSync('src/JacoboAgent.tsx', content, 'utf-8');
