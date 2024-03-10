export class Pacman {
    constructor(game) {
        this.game = game;
        this.height = 50;
        this.width = 50;
        this.x = this.game.width/2;
        this.y = this.game.height/2;
    }
    update(){

    }
    draw(context){
        context.fillStyle = 'yellow';
        context.fillRect(this.x, this.y, this.width, this.height);
    }

} 