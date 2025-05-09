export class LoadingScene extends Phaser.Scene {
    constructor() {
        super({ key: 'LoadingScene' });
    }

    preload() {
        // Display loading text
        const loadingText = this.add.text(400, 300, 'Loading...', {
            fontSize: '32px',
            fill: '#fff'
        });
        loadingText.setOrigin(0.5);

        // Create a simple platform sprite
        const graphics = this.make.graphics();
        graphics.fillStyle(0x8B4513);  // Brown color
        graphics.fillRect(0, 0, 400, 32);
        graphics.generateTexture('platform', 400, 32);
        graphics.destroy();
    }

    create() {
        this.scene.start('MenuScene');
    }
} 