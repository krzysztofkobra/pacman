export class Point{
    constructor(game, x, y){
        this.game = game;
        this.width = 15;
        this.heigth = 15;
        this.x = x;
        this.y = y;
        this.image = document.getElementById('point');
    }
    update(){

    }
    draw(context){
        context.drawImage(this.image, this.x, this.y, this.height, this.width);
    }
}