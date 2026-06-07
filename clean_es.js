const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // Replace `lang === 'es' ? '...' : '...'` with `'...'`
  content = content.replace(/lang\s*===\s*'es'\s*\?\s*(['"`][^'"`]*['"`])\s*:\s*(['"`][^'"`]*['"`])/g, '$2');
  
  // Replace `lang === 'es' ? <jsx> : <jsx>` (basic)
  // This is harder with regex, but we can try removing simple ternary blocks if they span lines
  
  // Replace `es ? '...' : '...'` 
  content = content.replace(/es\s*\?\s*(['"`][^'"`]*['"`])\s*:\s*(['"`][^'"`]*['"`])/g, '$2');
  
  // Replace `altEs: '...'` and keep `altEn: '...'` -> `alt: '...'`
  content = content.replace(/altEs:\s*['"`][^'"`]*['"`]\s*,\s*altEn:\s*(['"`][^'"`]*['"`])/g, 'alt: $1');
  
  // In App.tsx: { id: '...', es: '...', en: '...' } -> { id: '...', en: '...' }
  content = content.replace(/,\s*es:\s*'[^']*'/g, '');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Cleaned:', filePath);
  }
}

function walkDir(dir) {
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

walkDir(path.join(__dirname, 'src'));
