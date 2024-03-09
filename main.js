var DIRECTION = {
    IDLE: 0,
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4
  };
  //color = '##ffffb3'
class Board {
    Board(width, height, x, y, color) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }
    color = '#404040'
}

class Pacman {
    Pacman(width, height, x, y, color) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }
    color = '##ffffb3';

} 

class Ghost{
    Ghost(width, height, x, y, color){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }
    colors = ['#1a8cff', '#99ff66', '#ff5050', '#cc66ff'];
}

class Game{
    initialize() {
        const canvas = document.getElementById('canvas1');
        const ctx = canvas.getContext('2d');

        const b1 = new Board(3000, 4000, 0, 0, '#404040');
        canvas.width = b1.width;
        canvas.height = b1.height;

        this.pacman = new Pacman();
        this.ghost1 = new Ghost();
    }
}