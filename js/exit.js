function Exit(grid) {
    this.grid = grid;
    this.container = document.createElement('div');
    this.container.setAttribute('class', 'exit-container');
    this.grid.container.appendChild(this.container);
}

Exit.CENTER_OFFSET = 128 - 32;

Exit.prototype.setPosition = function(x, y) {
    this.posX = x;
    this.posY = y;
    this.grid.positionObject(this.container, {'x':x,'y':y}, Exit.CENTER_OFFSET);
};

Exit.prototype.getCoordinates = function() {
    return [this.posX, this.posY];
};