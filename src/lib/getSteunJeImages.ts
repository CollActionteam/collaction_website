import fs from 'fs';
import path from 'path';

export function getSteunJeImages() {
  // get usp file names
  const imagesDir = path.join(process.cwd(), 'public/sjs');
  const steunJeImages = fs.readdirSync(imagesDir, { withFileTypes: true });

  const imageFiles = steunJeImages.filter(file => file.isFile());

  const steunJeImagePaths = new Array(imageFiles.length);

  let i = 0;
  imageFiles.forEach(function (imageName) {
    const imagePath = path.join(`/sjs/${imageName.name}`);
    steunJeImagePaths[i] = imagePath;
    i++;
  });

  return steunJeImagePaths;
}
