var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('player', 'img/square.png');
}

function create() {
  game.add.sprite(0, 0, 'player');
}

function update() {
}