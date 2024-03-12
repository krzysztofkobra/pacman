export class Pacman {
    constructor(game) {
        this.game = game;
        this.height = 45;
        this.width = 45;
        this.x = this.game.width/2;
        this.y = this.game.height/2 - this.height;
        this.vy = 0;
        this.image = document.getElementById('pacman');
        this.speed = 0;
        this.maxSpeed = 2;
    }
    update(input){
        let horizontalMovement = 0;
        if(input.includes('a')){
            horizontalMovement = -this.maxSpeed;
        }
        else if(input.includes('d')){
            horizontalMovement = this.maxSpeed;
        }
    
        let verticalMovement = 0;
        if(input.includes('w')){
            verticalMovement = -2;
        }
        else if(input.includes('s')){
            verticalMovement = 2;
        }
    
        this.x += horizontalMovement;
        this.y += verticalMovement;
    
        if(this.x < 0) this.x = 0;
        if(this.x > this.game.width - this.width) this.x = this.game.width - this.width;
        if(this.y < 0) this.y = 0;
        if(this.y > this.game.height - this.height) this.y = this.game.height - this.height;
    }
    draw(context){
        context.drawImage(this.image, this.x, this.y, this.height, this.width);
    }
} 