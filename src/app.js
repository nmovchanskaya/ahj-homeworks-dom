import Field from './field';
import Game from './game';

const fieldElem = document.querySelector('.field');
const field = new Field(fieldElem);
const scoreElem = document.querySelector('.score');

const game = new Game(field, scoreElem);
game.move();
setInterval(game.move.bind(game), 2000);
