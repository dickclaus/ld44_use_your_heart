function Enemy(grid) {
    this.grid = grid;
    this.container = document.createElement('div');
    this.container.setAttribute('class', 'enemy-container');
    this.grid.container.appendChild(this.container);
}

Enemy.CENTER_OFFSET = 128 - 32;

Enemy.prototype.setPosition = function(x, y) {
    this.posX = x;
    this.posY = y;
    this.grid.positionObject(this.container, {'x':x, 'y':y}, Enemy.CENTER_OFFSET);
};

Enemy.prototype.isPosition = function(calc) {
    return this.posX == calc.x && this.posY == calc.y;
};