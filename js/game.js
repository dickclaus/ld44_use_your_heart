function Game() {
    this.nextMove = {'x':0,'y':0};
    this.moving = false;
    this.currentLevel = 1;
}

Game.prototype.start = function() {
    console.log('Start');
    this.grid = new Grid();
    this.menu = new Menu();
    this.overlay = new Overlay();

    this.exit = new Exit(this.grid);
    this.hero = new Hero(this.grid);
    this.enemy = new Enemy(this.grid);

    this.arrow = new Arrow(this.grid);
    this.arrow.setVisibility(false);


    this.loadLevel(this.currentLevel);

    this.grid.container.addEventListener('mousedown', this.onMouseDown.bind(this));

    this.menu.nextTurnButton.addEventListener('mousedown', this.onNextMove.bind(this));
};

Game.prototype.loadLevel = function(level) {
    var levelName = '';
    if (level > 10) {
        levelName = level + '';
    } else {
        levelName = '0' + level;
    }
    var loadName = 'level' + levelName;
    console.log(loadName);
    this.grid.loadLevel(loadName);

    var data = TileMaps['level01'];
    var tilesetArray = data['tilesets'][0]['tiles'];
    var markDatas = data['layers'].filter(function(layer){
        return layer.name == loadName + '_marks';
    });
    var markData = markDatas[0]["data"];
    for (var j = 0; j < Grid.NUMBER; j++) {
        for (var i = 0; i < Grid.NUMBER; i++) {
            var index = Grid.NUMBER * j + i;
            var textureId = markData[index];
            if (textureId > 0) {
                var markName = tilesetArray[textureId-1]['properties'][0]['value'];
                if (markName == 'start') {
                    this.hero.setPosition(i, j);
                } else if (markName == 'finish') {
                    this.exit.setPosition(i, j);
                } else if (markName == 'enemy') {
                    this.enemy.setPosition(i, j)
                }
            }
        }
    }
};

Game.prototype.onMouseDown = function(event) {
    var calc = this.grid.calculateGridPosition(event.clientX - Grid.WIDTH * 0.5, event.clientY);
    this.nextMove = calc;
    if (!this.hero.isPosition(calc) && !this.enemy.isPosition(calc)) {
        this.arrow.setVisibility(true);
        this.arrow.setPosition(calc.x, calc.y);
    }
};

Game.prototype.onNextMove = function(event) {
    if (!this.hero.isPosition(this.nextMove) && !this.moving) {
        this.moving = true;
        this.moveZombie();
        this.makeMove();
    }
};

Game.prototype.moveZombie = function() {
    var distX = this.enemy.posX - this.hero.posX;
    var distY = this.enemy.posY - this.hero.posY;
    var moveX = distX > 0 ? -1 : 1;
    var moveY = distY > 0 ? -1 : 1;
    if (Math.abs(distX) > Math.abs(distY)) {
        this.enemy.setPosition(this.enemy.posX + moveX, this.enemy.posY);
    } else {
        this.enemy.setPosition(this.enemy.posX, this.enemy.posY + moveY);
    }
};

Game.prototype.makeMove = function(event) {
    var distX = this.hero.posX - this.nextMove.x;
    var distY = this.hero.posY - this.nextMove.y;
    var moveX = distX > 0 ? -1 : 1;
    var moveY = distY > 0 ? -1 : 1;
    if (Math.abs(distX) > Math.abs(distY)) {
        this.hero.setPosition(this.hero.posX + moveX, this.hero.posY);
    } else {
        this.hero.setPosition(this.hero.posX, this.hero.posY + moveY);
    }
    setTimeout(function() {
        this.moving = false;
        this.checkEndGame();
    }.bind(this), 200);
};

Game.prototype.checkEndGame = function() {
    if (this.hero.isPosition({'x':this.exit.posX, 'y':this.exit.posY})) {
        this.currentLevel++;
        if (this.currentLevel == 3) {
            this.showGameWin();
            return;
        }
        this.overlay.showOverlay();
        setTimeout(function(){
            this.loadLevel(this.currentLevel);
            this.overlay.hideOverlay();
        }.bind(this), 1200);

    }
};

Game.prototype.showGameWin = function() {
    console.log('show game win');
    this.overlay.showOverlay();
};

let game = new Game();
game.start();


