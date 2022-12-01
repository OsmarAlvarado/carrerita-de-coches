class BordRoad {
    constructor(ctx, posX, posY, width, height) { //realizamos los keys de la pista.
        this.ctx = ctx
        this.roadPos = { x: posX, y: posY }
        this.roadSize = { w: width, h: height }

        this.imageRoadInstance = undefined

        this.roadInstance()

    }

    roadInstance() {
        this.imageRoadInstance = new Image()
        this.imageRoadInstance.src = 'images/road.png'
    }

    draw() {
        this.ctx.drawImage(this.imageRoadInstance, this.roadPos.x, this.roadPos.y, this.roadSize.w, this.roadSize.h)
    }

}