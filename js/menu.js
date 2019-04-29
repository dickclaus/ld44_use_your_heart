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
    this.nextTurnButton.innerHTML = "<p class='make-step'>Make step</p>"
    this.nextTurnButton.style.top = 512 + 'px';
    this.nextTurnButton.style.left = (1024 - 256) + 'px';

    this.leaveHeartButton = document.createElement('div');
    this.leaveHeartButton.setAttribute('class', 'menu-button');
    this.leaveHeartButton.classList.add('red-tint');
    this.leaveHeartButton.innerHTML = "<p class='leave-live'>Leave a heart</p>"
    this.leaveHeartButton.style.left = (1024 - 256) + 'px';
    this.leaveHeartButton.style.top = (512 + 64) + 'px';

    this.container.appendChild(this.nextTurnButton);
    this.container.appendChild(this.leaveHeartButton);
};

Menu.prototype.createLiveIndicator = function() {
    this.liveIndicator = new LiveIndicator(this);
};