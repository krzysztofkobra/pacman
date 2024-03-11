export class Ghost{
    constructor(game){
        this.game = game;
        this.height = 45;
        this.width = 45;
        this.x = 0;
        this.y = 0;
        this.vy = 0;
        this.image = document.getElementById('ghost');
        this.speed = 0;
        this.maxSpeed = 2;
    }
    //colors = ['#1a8cff', '#99ff66', '#ff5050', '#cc66ff'];
    draw(context){
        context.drawImage(this.image, this.x, this.y, this.height, this.width);
    }
    update(){
        if(this.x < 0) this.x = 0;
        if(this.x > this.game.width - this.width) this.x = this.game.width - this.width;
        if(this.y < 0) this.y = 0;
        if(this.y > this.game.height - this.height) this.y = this.game.height - this.height;
    }
}