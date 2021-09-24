import { ImageProcessor } from "./modules/image-processor.js";
import { ImageConfig } from "./models/image-config.js";

let ip1 =
  new ImageProcessor(new ImageConfig('./test2.png', '2d', 'test1', 3))

