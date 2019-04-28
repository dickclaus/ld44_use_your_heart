function Menu() {
    this.container = document.createElement('div');
    this.container.setAttribute('class', 'menu-container');
    document.body.appendChild(this.container);


    this.createButtons();
    this.createLiveIndicator();
}

Menu.WIDTH = 1024;

Menu.prototype.createButtons = function() {
    this.nextTurnButton = document.createElement('div');
    this.nextTurnButton.setAttribute('class', 'menu-button');
    this.nextTurnButton.style.left = (1024 - 256) + 'px';

    this.container.appendChild(this.nextTurnButton);
};

Menu.prototype.createLiveIndicator = function() {
    this.liveIndicator = new LiveIndicator(this);
};