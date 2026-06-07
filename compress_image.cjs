const sharp = require('sharp');
const fs = require('fs');

const inputPath = 'public/Gemini_Generated_Image_4eklr94eklr94ekl.png';
const outputPath = 'public/Gemini_Generated_Image_4eklr94eklr94ekl_sm.png';

sharp(inputPath)
  .resize(400) // resize width to 400px
  .png({ quality: 80, compressionLevel: 9 })
  .toFile(outputPath)
  .then(() => {
    fs.renameSync(outputPath, inputPath);
    console.log('Image compressed successfully.');
  })
  .catch(err => {
    console.error('Error compressing image:', err);
  });
