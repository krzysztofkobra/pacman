export class Ghost{
    constructor(game, x, y, index){
        this.game = game;
        this.height = 45;
        this.width = 45;
        this.x = x;
        this.y = y;
        this.vy = 0;
        this.image = [document.getElementById('ghost'), document.getElementById('ghost2'), document.getElementById('ghost3'), document.getElementById('ghost4')];
        this.index = index;
        this.speed = 0;
        this.maxSpeed = 2;
    }
    draw(context){
        context.drawImage(this.image[this.index], this.x, this.y, this.height, this.width);
    }
    update(){
        if(this.x < 0) this.x = 0;
        if(this.x > this.game.width - this.width) this.x = this.game.width - this.width;
        if(this.y < 0) this.y = 0;
        if(this.y > this.game.height - this.height) this.y = this.game.height - this.height;
    }
}