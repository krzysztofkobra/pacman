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
    }
    init(){
        this.pacman = new Pacman(this);
        this.ghost1 = new Ghost(this, 500, 500);
        this.ghost2 = new Ghost(this, 0, 0);

        this.score = 0;
        this.point = new Point(this, 100, 100);

        this.input = new InputHandler();
        this.gameOver = false;
    }
    update(){
        if(this.gameOver == true) this.stop();

        this.pacman.update(this.input.keys);
        this.ghost1.update();
        this.ghost2.update();
        this.checkifCollide();
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
    }
    checkifCollide(){
       
    const overlapX = this.pacman.x < this.ghost1.x + this.ghost1.width && 
    this.pacman.x + this.pacman.width > this.ghost1.x;

    const overlapY = this.pacman.y < this.ghost1.y + this.ghost1.height && 
    this.pacman.y + this.pacman.height > this.ghost1.y;

    if (overlapX && overlapY) {
        
        this.gameOver = true;
    }
}
    restart(){
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
