function Arrow(grid) {
    this.grid = grid;
    this.container = document.createElement('div');
    this.container.setAttribute('class', 'arrow-container');
    this.grid.container.appendChild(this.container);
}

Arrow.CENTER_OFFSET = 128 - 32;

Arrow.prototype.setPosition = function(x, y) {
    this.posX = x;
    this.posY = y;
    this.grid.positionObject(this.container, {'x':x, 'y':y}, Enemy.CENTER_OFFSET);
};

Arrow.prototype.setVisibility = function(value) {
    if (value === true) {
        this.container.classList.remove('hidden');
    } else {
        this.container.classList.add('hidden');
    }
};