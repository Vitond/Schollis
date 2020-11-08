import {CONST_SIZEFOR10MIN} from '../../constants/constants.js';

class Blank {
  constructor(length) {
    this.length = length;
  }

  calcWidth() {
    return (this.length / 10) * +CONST_SIZEFOR10MIN;
  }

  render(day, timeTable) {
    const item = document.createElement("div");
    item.className = `blank blank--${this.length}`;

    item.style.width = `${this.calcWidth()}rem`;

    timeTable.appendToDay(day, item);
  }
}

export default Blank;