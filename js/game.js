function Game() {

}

Game.prototype.start = function() {
    console.log('Start');
    this.grid = new Grid();
    this.exit = new Exit(this.grid);
    this.exit.setPosition(7,0);
    this.hero = new Hero(this.grid);
    this.hero.setPosition(0, 7);
    this.enemy = new Enemy(this.grid);
    this.enemy.setPosition(7, 7);
    this.arrow = new Arrow(this.grid);
    this.arrow.setVisibility(false);

    this.grid.loadLevel("level01");
    this.grid.container.addEventListener("mousedown", this.onMouseDown.bind(this));
};

Game.prototype.onMouseDown = function(event) {
    var calc = this.grid.calculateGridPosition(event.clientX - Grid.WIDTH * 0.5, event.clientY);
    if (!this.hero.isPosition(calc) && !this.enemy.isPosition(calc)) {
        this.arrow.setVisibility(true);
        this.arrow.setPosition(calc.x, calc.y);
    }
};

let game = new Game();
game.start();


