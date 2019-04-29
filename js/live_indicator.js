function LiveIndicator(menu) {
    this.lives = 3;

    this.menu = menu;

    this.container = document.createElement('div');
    this.container.setAttribute('class', 'live-container');
    this.menu.container.appendChild(this.container);

    this.createHearts();
}

LiveIndicator.prototype.createHearts = function() {
    while (this.container.firstChild) {
        this.container.removeChild(this.container.firstChild);
    }
    for (var i = 0; i < this.lives; i++) {
        var heart = document.createElement('div');
        heart.setAttribute('class', 'live-indicator-heart');
        heart.style.left = (i * 128) + 'px';
        this.container.appendChild(heart);
    }
};

LiveIndicator.prototype.leaveHeart = function() {
    this.lives--;
    this.createHearts();
};




