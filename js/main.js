var game = new Phaser.Game(800, 600, Phaser.AUTO);

var GameState = {
    preload: function(){
        this.load.image("background", "assets/img/background.jpg");
        this.load.image("mario", "assets/img/mario.png");
    },
    create: function(){
        this.background = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "background");
        this.background.anchor.setTo(0.5, 0.5);

        this.mario = this.game.add.sprite(this.game.world.centerX, 400, "mario");
        this.mario.anchor.setTo(0.5, 0.5);
        this.mario.scale.setTo(0.2);
    },
    update: function(){

    }
};

game.state.add("GameState", GameState);
game.state.start("GameState");
