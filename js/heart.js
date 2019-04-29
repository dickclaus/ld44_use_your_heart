function Heart(grid) {
    this.grid = grid;
    this.container = document.createElement('div');
    this.container.setAttribute('class', 'heart-container');
    this.grid.container.appendChild(this.container);
}

Heart.CENTER_OFFSET = 128 - 32;

Heart.prototype.setPosition = function(x, y) {
    this.posX = x;
    this.posY = y;
    this.grid.positionObject(this.container, {'x':x, 'y':y}, Heart.CENTER_OFFSET);
};

Heart.prototype.setVisibility = function(value) {
    if (value === true) {
        this.container.classList.remove('hidden');
    } else {
        this.container.classList.add('hidden');
    }
};