const fs = require('fs');
const { execSync } = require('child_process');

const files = execSync('find . -type f -name "*.html" -o -name "*.tsx" -o -name "*.ts"').toString().split('\n').filter(Boolean);

for (const file of files) {
  if (file.includes('node_modules')) continue;
  let content = fs.readFileSync(file, 'utf-8');
  let original = content;
  
  content = content.replace(/\/foto-avatar-sm\.webp/g, '/Gemini_Generated_Image_4eklr94eklr94ekl.png');
  content = content.replace(/\/foto-avatar\.webp/g, '/Gemini_Generated_Image_4eklr94eklr94ekl.png');
  content = content.replace(/\/foto-avatar\.png/g, '/Gemini_Generated_Image_4eklr94eklr94ekl.png');
  content = content.replace(/\/business-os\/ig-avatar\.jpg/g, '/Gemini_Generated_Image_4eklr94eklr94ekl.png');
  content = content.replace(/foto-avatar\.png/g, 'Gemini_Generated_Image_4eklr94eklr94ekl.png');
  
  // Remove srcSet/imagesrcset related to these images if they were replaced
  if (original.includes('foto-avatar')) {
      content = content.replace(/srcSet="[^"]+"/g, '');
      content = content.replace(/imagesrcset="[^"]+"/g, '');
      content = content.replace(/imagesizes="[^"]+"/g, '');
      content = content.replace(/sizes="[^"]+"/g, '');
      content = content.replace(/type="image\/webp"/g, 'type="image/png"');
  }

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
}
