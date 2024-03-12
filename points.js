export class Point{
    constructor(game, x, y){
        this.game = game;
        this.height = 15;
        this.width = 15;
        this.x = x;
        this.y = y;
        this.image = document.getElementById('point');
    }
    update(){
        if(this.x < 0) this.x = 0;
        if(this.x > this.game.width - this.width) this.x = this.game.width - this.width;
        if(this.y < 0) this.y = 0;
        if(this.y > this.game.height - this.height) this.y = this.game.height - this.height;
    }
    draw(context){
        context.drawImage(this.image, this.x, this.y, this.height, this.width);
    }
}