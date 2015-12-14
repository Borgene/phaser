var game;
// Create a new game instance 960px wide and 540px tall:
game = new Phaser.Game(960, 540, Phaser.AUTO, '');
// First parameter is how our state will be called.
// Second parameter is an object containing the needed methods for state functionality
game.state.add('Menu', Menu);
game.state.start('Menu');