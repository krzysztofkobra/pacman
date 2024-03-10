import { Pacman }  from './pacman.js';
import { Board } from './board.js';

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
    }
    update(){

    }
    draw(context){
        this.pacman.draw(context);
    }
}
const game = Game(canvas.width, canvas.height);
console.log(game);

    function animate(){
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();
})
