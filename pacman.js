export class Pacman {
    constructor(game) {
        this.game = game;
        this.height = 50;
        this.width = 50;
        this.x = this.game.width/2;
        this.y = this.game.height/2 - this.height;
        this.vy = 0;
        this.image = document.getElementById('pacman');
        this.speed = 0;
        this.maxSpeed = 2;
    }
    update(input){
        this.x += this.speed;
        this.y += this.vy;
        if(input.includes('a')){
            this.speed = -this.maxSpeed;
        }
        else if(input.includes('d')){
            this.speed = this.maxSpeed;
        }
        if(input.includes('w')){
            this.vy =- 2;
        }
        else if(input.includes('s')){
            this.vy = 2;
        }
        if(this.x < 0) this.x = 0;
        if(this.x > this.game.width - this.width) this.x = this.game.width - this.width;
        if(this.y < 0) this.y = 0;
        if(this.y > this.game.width - this.width) this.y = this.game.height - this.height;
    }
    draw(context){
        context.drawImage(this.image, this.x, this.y, this.height, this.width);
    }

} 