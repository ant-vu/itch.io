import Phaser from 'phaser';

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    create() {
        // Create a simple rectangle
        this.rectangle = this.add.rectangle(400, 300, 50, 50, 0x00ff00);
        
        // Add some text
        this.add.text(400, 100, 'Simple Game', {
            fontSize: '32px',
            fill: '#fff'
        }).setOrigin(0.5);
    }

    update() {
        // Make the rectangle move
        this.rectangle.x += 1;
        if (this.rectangle.x > 800) {
            this.rectangle.x = 0;
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    scene: GameScene
};

new Phaser.Game(config); 