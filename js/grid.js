function Grid() {
    this.container = document.createElement('div');
    this.container.setAttribute('class', 'grid-container');
    document.body.appendChild(this.container);

    this.tiles = [];
    this.createTiles();
    this.addListeners();
}

Grid.TILE_WIDTH = 128;
Grid.TILE_HEIGHT = 64;
Grid.WIDTH = 1024;
Grid.HEIGHT = 512;

Grid.prototype.createTiles = function() {
    for (var j = 0; j < 8; j++) {
        for (var i = 0; i < 8; i++) {
            var tile = document.createElement('div');
            tile.setAttribute('class', 'grid-tile');
            tile.style.left = ((-Grid.TILE_WIDTH * 0.5) + ((Grid.HEIGHT - (j * Grid.TILE_HEIGHT)) + (i * Grid.TILE_WIDTH * 0.5))) + 'px';
            tile.style.top = (i * Grid.TILE_HEIGHT * 0.5) + (Grid.TILE_HEIGHT * 0.5 * j) + 'px';
            this.container.appendChild(tile);
            this.tiles.push(tile);
        }
    }
};

Grid.prototype.addListeners = function() {
    document.addEventListener('mousemove', this.handleMouseMove)
};

Grid.prototype.handleMouseMove = function(event) {
    console.log(event.clientX, event.clientY);
    var x = event.clientX - Grid.WIDTH * 0.5;
    var y = event.clientY;
};



