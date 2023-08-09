import Field from './field';

export default class Game {
  constructor(field, scoreElem) {
    this.field = field;
    this.score = scoreElem;
    this.points = 0;
    this.goblinIdx = -1;
    this.init();
  }

  init() {
    // add event listeners
    // if cell has goblin in it -> increase points
    this.field.cells.forEach((item) => {
      item.addEventListener('click', (e) => {
        // if we have goblin in this clicked cell -> points+1
        if (e.target.classList.contains('goblin')) {
          this.points++;
          this.score.textContent = `Score: ${this.points}`;
          e.target.className = 'goblin-hidden';
        }
        /* const arrChildren = Array.from(e.target.children);
        const goblinIdx = arrChildren.findIndex((elem) => elem.classList.contains('goblin'));
        if (goblinIdx >= 0) {
          this.points++;
          arrChildren[goblinIdx].className = 'goblin-hidden';
        } */
      });
    });
  }

  // random move to different cell
  move() {
    let goblinElem = document.querySelector('.goblin');
    if (!goblinElem) {
      goblinElem = document.querySelector('.goblin-hidden');
    }

    // move to another
    const newdIdx = this.getNewPosition(this.goblinIdx);
    this.goblinIdx = newdIdx;
    goblinElem.className = 'goblin';
    this.field.cells[newdIdx].appendChild(goblinElem);
  }

  getNewPosition(goblinIdx) {
    const randIdx = Math.floor(Math.random() * this.field.cells.length);
    if (goblinIdx === randIdx) {
      return this.getNewPosition(goblinIdx);
    }
    return randIdx;
  }
}
