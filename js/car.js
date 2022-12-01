class Car {

    constructor(ctx, posX, posY, width, height) { //realizamos los keys del carrito.
        this.ctx = ctx
        this.carPos = { x: posX, y: posY }
        this.carSize = { w: width, h: height }

        this.imageInstance = undefined

        this.init() //para ejecutar en la inicializacion, el constructor
    }

    init() { //aqui colocamos la imagen que se usara y se mostrara en el canvas
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/car.png'
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    moveLeft() {
        this.carPos.x -= 30
    }

    moveRight() {
        this.carPos.x += 30
    }

}