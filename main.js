import { Pacman }  from './pacman.js';
import { Board } from './board.js';
import { InputHandler } from './input.js';
import { Ghost } from './ghost.js';

window.addEventListener('load', function() {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    const board = new Board(500, 500, 0, 0);
    canvas.width = board.width;
    canvas.height = board.height;
    // ctx.fillStyle = board.getColor();
    // ctx.fillRect(board.x, board.y, board.width, board.height);

class Game{
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.pacman = new Pacman(this);
        this.input = new InputHandler();
        this.ghost1 = new Ghost(this);
    }
    update(){
        this.pacman.update(this.input.keys);
        this.ghost1.update();
        this.checkifCollide();
    }
    draw(context){
        this.pacman.draw(context);
        this.ghost1.draw(context);
    }
    checkifCollide(){
       
    const overlapX = this.pacman.x < this.ghost1.x + this.ghost1.width && 
    this.pacman.x + this.pacman.width > this.ghost1.x;


    const overlapY = this.pacman.y < this.ghost1.y + this.ghost1.height && 
    this.pacman.y + this.pacman.height > this.ghost1.y;


    if (overlapX && overlapY) {
        ctx.drawImage(document.getElementById('gameover'), 125, 125, this.height/2, this.width/2);
    }
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
