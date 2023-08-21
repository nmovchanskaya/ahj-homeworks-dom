import Field from './field';
import Game from './game';

const fieldElem = document.querySelector('.field');
const scoreElem = document.querySelector('.score');

const game = new Game(fieldElem, scoreElem);
setInterval(game.move.bind(game), 2000);
