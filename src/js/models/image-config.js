export class ImageConfig {
  canvas
  ctx
  id

  constructor(c, ctxType, id) {
    this.canvas = c
    this.ctx = this.canvas.getContext(ctxType)
    this.id = id
  }
}