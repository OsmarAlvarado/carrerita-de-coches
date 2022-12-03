const controlledIndex = {

  name: 'Animated Index',
  description: 'Canvas app for basic shapes animating',
  version: '2.0.0',
  author: 'Osmar',
  license: undefined,
  canvasNode: undefined, //cuerpo del canvas
  ctx: undefined, // contexto
  gameSize: { w: undefined, h: undefined }, //tamaño del juego ancho y altura

  road: undefined,
  car: undefined,
  obstacules: undefined,

  framesIndex: 0,

  init(canvas) {
    this.canvasNode = document.querySelector(`#${canvas}`)
    this.ctx = this.canvasNode.getContext('2d')

    this.setDimensions()




  },

  setDimensions() { //define el tamaño de las ventanas
    this.gameSize = {
      w: window.innerWidth,
      h: window.innerHeight
    }

    this.canvasNode.setAttribute('width', this.gameSize.w)
    this.canvasNode.setAttribute('height', this.gameSize.h)
  },

  setEventListeners() {
    document.onkeydown = event => {

    }
  }




  window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
    };

    function startGame() { }
  }

}