function Grid() {
    this.container = document.createElement('div');
    this.container.setAttribute('class', 'grid-container');
    document.body.appendChild(this.container);

    this.tiles = [];
    this.createTiles();
    this.createCross();
    this.addListeners();
}

Grid.TILE_WIDTH = 128;
Grid.TILE_HEIGHT = 64;
Grid.WIDTH = 1024;
Grid.HEIGHT = 512;
Grid.NUMBER = 8;

Grid.prototype.createTiles = function() {
    for (var j = 0; j < Grid.NUMBER; j++) {
        for (var i = 0; i < Grid.NUMBER; i++) {
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
    document.addEventListener('mousemove', this.handleMouseMove.bind(this));
};

Grid.prototype.createCross = function() {
    this.cross = document.createElement('div');
    this.cross.setAttribute('class', 'cross');
    this.container.appendChild(this.cross);
};

Grid.prototype.loadLevel = function(level) {
    var level = TileMaps[level];
    var tileset = level["tilesets"][0]["tiles"];
    var levelData = level["layers"][0]["data"];
    for (var j = 0; j < Grid.NUMBER; j++) {
        for (var i = 0; i < Grid.NUMBER; i++) {
            var index = Grid.NUMBER * j + i;
            var textureId = levelData[index];
            var currentTile = this.tiles[index];
            var image = tileset[textureId-1]["image"];
            currentTile.style.backgroundImage = "url(" + image.substring(3) + ")";
        }
    }
};

Grid.prototype.calculateGridPosition = function(mX, mY) {
    var x = Math.floor(-(-mX * Grid.TILE_HEIGHT - mY * Grid.TILE_WIDTH) / (Grid.TILE_WIDTH * Grid.TILE_HEIGHT));
    var y = Math.floor(-(mX * Grid.TILE_HEIGHT - mY * Grid.TILE_WIDTH) / (Grid.TILE_WIDTH * Grid.TILE_HEIGHT));
    x = x >= Grid.NUMBER ? Grid.NUMBER - 1 : x <= 0 ? 0 : x;
    y = y >= Grid.NUMBER ? Grid.NUMBER - 1 : y <= 0 ? 0 : y;
    return {'x':x, 'y':y};
};

Grid.prototype.positionObject = function(obj, calc, offset) {
    obj.style.left = ((-Grid.TILE_WIDTH * 0.5) + ((Grid.HEIGHT - (calc.y * Grid.TILE_HEIGHT)) + (calc.x * Grid.TILE_WIDTH * 0.5))) + 'px';
    obj.style.top = (-offset + (calc.x * Grid.TILE_HEIGHT * 0.5) + (Grid.TILE_HEIGHT * 0.5 * calc.y)) + 'px';
};

Grid.prototype.handleMouseMove = function(event) {
    this.tiles.forEach(function(tile){
        tile.classList.remove('over');
    });
    var mX = event.clientX - Grid.WIDTH * 0.5;
    var mY = event.clientY;
    var calc = this.calculateGridPosition(mX, mY);
    this.positionObject(this.cross, calc, 0);

    //var selectedTile = this.tiles[Grid.NUMBER * y + x];
    //selectedTile.classList.add('over');
};





