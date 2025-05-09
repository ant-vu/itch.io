export class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }

    create() {
        const title = this.add.text(400, 200, 'Pixel Adventure', {
            fontSize: '48px',
            fill: '#fff'
        });
        title.setOrigin(0.5);

        const startButton = this.add.text(400, 300, 'Start Game', {
            fontSize: '32px',
            fill: '#fff',
            backgroundColor: '#000',
            padding: { x: 20, y: 10 }
        });
        startButton.setOrigin(0.5);
        startButton.setInteractive();

        startButton.on('pointerdown', () => {
            this.scene.start('GameScene');
        });
    }
} 