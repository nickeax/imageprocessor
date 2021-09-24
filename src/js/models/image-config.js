export class ImageConfig {
  canvas
  ctx
  id
  divisions
  imagePath

  constructor(imagePath, ctxType, id, divisions) {
    this.imagePath = imagePath
    this.ctxType = ctxType
    this.id = id
    this.divisions = divisions
  }
}