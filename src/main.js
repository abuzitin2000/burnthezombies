var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [
        loadMenu, mainMenu, battleForest
    ] 
};

var game = new Phaser.Game(config);