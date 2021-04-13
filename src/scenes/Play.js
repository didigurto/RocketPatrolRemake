class Play extends Phaser.Scene{
    constructor() {
        super("playScene");
        console.log("is this working");
    }

    preload() {
        this.load.image('starfield', 'assets/starfield.png');
        console.log("dkdkdk")
    }

        
create(){
    //adding starfield and specifying how much of the image to use as a tile sprite
    this.starfield = this.add.tileSprite(
        0,0,640,480, 'starfield').setOrigin(0,0);
    

    // green UI background
   this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00,).setOrigin(0,0);
    //white borders
    this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
	this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
	this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
	this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);

}
//making starfield scroll by moving and phaser provides a function for it to repeat
update() {
    this.starfield.tilePositionX += 4;
}


}
