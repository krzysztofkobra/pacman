import { Pacman }  from './pacman.js';
import { Board } from './board.js';
import { InputHandler } from './input.js';
import { Ghost } from './ghost.js';
import { Point } from './points.js';

window.addEventListener('load', function() {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    const board = new Board(500, 500, 0, 0);
    canvas.width = board.width;
    canvas.height = board.height;

class Game{
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.init();
        this.score = 0;
    }
    getRandom(min, max) {
        const floatRandom = Math.random()
      
        const difference = max - min
      
        const random = Math.round(difference * floatRandom)
      
        const randomWithinRange = random + min
      
        return randomWithinRange
      }
    init(){
        this.pacman = new Pacman(this);

        this.ghost1 = new Ghost(this, 0, 0, '1');
        this.ghost2 = new Ghost(this, 500, 500, '0');
        this.ghost3 = new Ghost(this, 0, 500, '2');
        this.ghost4 = new Ghost(this, 500, 0, '3');

        this.points = [];
    for (let i = 0; i < 10; i++) {
        let x, y;
        let unique = false;

        while (!unique) {
            x = this.getRandom(0, 500);
            y = this.getRandom(0, 500);
            unique = true; 

            for (const point of this.points) {
                if (x === point.x && y === point.y) {
                    unique = false;
                    break;
                }
            }
        }

        this.points.push(new Point(this, x, y));
    }

        this.input = new InputHandler();
        this.gameOver = false;
    }
    update(){
        if(this.gameOver == true) this.stop();

        this.pacman.update(this.input.keys);

        this.ghost1.update();
        this.ghost2.update();
        this.ghost3.update();
        this.ghost4.update();

        for (const point of this.points) {
            point.update();
        }

        this.checkIfCollide();
    }
    stop(){
        ctx.drawImage(document.getElementById('gameover'), 125, 125, this.height/2, this.width/2);
        document.getElementById('gameover2').style.display='block';

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' && game.gameOver) {
                game.restart();
                document.getElementById('gameover2').style.display='none';
            }
        });
    }
    draw(context){
        if(this.gameOver == true) return;

        this.pacman.draw(context);
        this.ghost1.draw(context);
        this.ghost2.draw(context);
        this.ghost3.draw(context);
        this.ghost4.draw(context);

        for (const point of this.points) {
            point.draw(context);
        }
    }
    checkIfCollide(){
        for (const point of this.points) {
            const overlapXp = this.pacman.x < point.x + point.width && this.pacman.x + this.pacman.width > point.x;
            const overlapYp = this.pacman.y < point.y + point.height && this.pacman.y + this.pacman.height > point.y;
            if (overlapXp && overlapYp){
                this.score += 10;
                document.getElementById("score").innerHTML="score: "+this.score;
            }
        }
    const overlapX = this.pacman.x < this.ghost1.x + this.ghost1.width && 
                     this.pacman.x + this.pacman.width > this.ghost1.x || this.pacman.x < this.ghost2.x + this.ghost2.width && 
                     this.pacman.x + this.pacman.width > this.ghost2.x;

    const overlapY = this.pacman.y < this.ghost1.y + this.ghost1.height && 
                     this.pacman.y + this.pacman.height > this.ghost1.y || this.pacman.y < this.ghost2.y + this.ghost2.height && 
                     this.pacman.y + this.pacman.height > this.ghost2.y;

    if (overlapX && overlapY) {
        
        this.gameOver = true;
    }
}
    restart(){
        this.score = 0;
        document.getElementById("score").innerHTML="score: "+this.score;
        this.init(); 
    }
}
    const game = new Game(canvas.width, canvas.height);
    console.log(game);

    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();
})