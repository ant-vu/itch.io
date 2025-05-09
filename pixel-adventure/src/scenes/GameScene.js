export class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    create() {
        // Create platforms
        const platforms = this.add.group();
        const ground = platforms.create(400, 580, 'platform');
        ground.setScale(2).refreshBody();

        // Create player
        this.player = this.add.rectangle(100, 450, 32, 48, 0x00ff00);
        this.physics.add.existing(this.player);

        // Player physics
        this.player.body.setBounce(0.2);
        this.player.body.setCollideWorldBounds(true);

        // Collision between player and platforms
        this.physics.add.collider(this.player, platforms);

        // Input
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        // Player movement
        if (this.cursors.left.isDown) {
            this.player.body.setVelocityX(-160);
        } else if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(160);
        } else {
            this.player.body.setVelocityX(0);
        }

        // Jumping
        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.body.setVelocityY(-330);
        }
    }
} 