function Overlay() {
    this.container = document.createElement('div');
    this.container.setAttribute('class', 'overlay-container');
    document.body.appendChild(this.container);
}

Overlay.prototype.showOverlay = function() {
    this.container.classList.add('visible');
};

Overlay.prototype.hideOverlay = function() {
    this.container.classList.remove('visible');
};

