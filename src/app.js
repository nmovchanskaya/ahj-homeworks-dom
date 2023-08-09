import Field from './field.js';
import Game from './game.js';

const fieldElem = document.querySelector('.field');
const field = new Field(fieldElem);
const scoreElem = document.querySelector('.score');

const game = new Game(field, scoreElem);
game.move();
setInterval(game.move.bind(game), 2000);
