export class ImageProcessor {
  config
  data
  img
  ctx
  canvas
  imgPath
  imgWidth
  imgHeight
  aspectRatio

  destX
  destY
  columnSize
  rowSize

  sourceHeight
  sourceWidth
  sourceHeight
  sections
  divisions

  canvas


  constructor(config) {
    this.canvas = document.querySelector('#testCanvas')
    this.ctx = this.canvas.getContext('2d')
    this.imagePath = config.imagePath
    this.divisions = config.divisions
    this.sourceImage = new Image()
    this.sourceImage.addEventListener('load', e => {
      this.initialiseMetrics()
      this.buildSections()
    }) // the image has loaded, use it's dimensions to initialise section info
    this.sourceImage.src = this.imagePath
  }

  initialiseMetrics() {
    this.sourceWidth = this.sourceImage.width
    this.sourceHeight = this.sourceImage.height
    this.columnSize = Math.floor(this.sourceImage.naturalWidth / this.divisions);
    this.rowSize = Math.floor(this.sourceImage.naturalHeight / this.divisions);
  }

  buildSections() {
    for (let r = 0, row = 0; row < this.sourceHeight; row += this.rowSize, r++) {
      for (let column = 0; column < this.sourceWidth; column += this.columnSize) {
        console.log(column, row, column + this.columnSize, row + this.rowSize)
        this.ctx.strokeRect(column, row, column + this.columnSize, row + this.rowSize)
      }
    }
  }

  getImageData() {
    console.log(this.img);
    document.body.appendChild(this.img)
    // this.data = this.ctx.getImageData(0, 0, this.imgWidth, this.imgHeight)
  }

  displayImage() {
    let outputImage = new Image()
    outputImage.addEventListener('load', e => {
      document.body.appendChild(outputImage)
    })
  }

  createImageSections() {

  }

  // createImage(path) {
  //   this.imgPath = path
  //   this.img = new Image()
  //   this.img.addEventListener('load', ev => {
  //     this.canvas.setAttribute('width', this.img.width + 100)
  //     this.canvas.setAttribute('height', this.img.height)
  //     this.imgWidth = this.img.naturalWidth
  //     this.imgHeight = this.img.naturalHeight
  //     this.aspectRatio = this.img.naturalWidth / this.img.naturalHeight
  //     this.ctx.drawImage(this.img, 0, 0, this.img.width / 3, this.img.height / 3, this.destX, this.destY, 300, 300)
  //   }, false)

  //   this.img.src = path

  //   console.log(this);
  // }

  setDestXY(obj) {
    this.destX = obj.x
    this.destY = obj.y
  }

  setSourceXY(obj) {
    this.sourceWidth = obj.x
    this.sourceHeight = obj.y
  }
}