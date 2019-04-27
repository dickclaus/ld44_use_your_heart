function Hero(grid) {
    this.grid = grid;
    this.container = document.createElement('div');
    this.container.setAttribute('class', 'hero-container');
    this.grid.container.appendChild(this.container);
}

Hero.CENTER_OFFSET = 128 - 32;

Hero.prototype.setPosition = function(x, y) {
    this.posX = x;
    this.posY = y;
    this.grid.positionObject(this.container, {'x':x, 'y':y}, Hero.CENTER_OFFSET);
};

Hero.prototype.isPosition = function(calc) {
    return this.posX == calc.x && this.posY == calc.y;
};