import fs from 'fs';
import { StaticImageData } from 'next/image';
import path from 'path';

export function getSteunJeImages() {
  // get usp file names
  const imagesDir = path.join(process.cwd(), 'public/sjs');
  const steunJeImages = fs.readdirSync(imagesDir);

  const steunJeImagesPaths:StaticImageData[] = new Array(steunJeImages.length)

  let i = 0
  steunJeImages.forEach(function(imageName){
    // const imagePath = path.join(`public/sjs/${imageName}`);
    // import img1 from imagePath;
    // steunJeImagesPaths[i] = img1
    i++
  })

  console.log(steunJeImages)

  return steunJeImages;
}
