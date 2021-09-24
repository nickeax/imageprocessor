import { ImageProcessor } from "./modules/image-processor.js";
import { ImageConfig } from "./models/image-config.js";

let ip = new ImageProcessor(new ImageConfig(document.querySelector('#canvas1'), '2d', 'test1'))

console.log(ip);