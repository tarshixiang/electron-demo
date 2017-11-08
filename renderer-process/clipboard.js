const { clipboard, nativeImage } = require('electron');


clipboard.writeText('Hello sx')
clipboard.writeText('Hello tar')

console.log(clipboard.readText());


let img = nativeImage.createFromPath('main-process/icon/icon.png');


clipboard.writeImage(img);

const imgDataURL = clipboard.readImage().toDataURL();

const img3 = new Image();

img3.src = imgDataURL;

document.body.appendChild(img3);