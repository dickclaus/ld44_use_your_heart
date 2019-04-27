function Game() {

}

Game.prototype.start = function() {
    console.log('Start');
    var grid = new Grid();
};

let game = new Game();
game.start();
