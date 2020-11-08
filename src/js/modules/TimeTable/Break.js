import {CONST_SIZEFOR10MIN} from '../../constants/constants.js';

class Break {
  constructor(length, lunchTime = false) {
    this.length = length;
    this.lunchTime = lunchTime;
  }

  render(day, timeTable) {
    const item = document.createElement("div");

    item.className = `break break--${this.length}`;
    item.style.width = `${this.calcWidth()}rem`;
    item.innerHTML = `
              <div class="break__text">
              ${this.length} min
              <p>
              ${this.lunchTime ? "Oběd" : ""}
              </p>
              </div>
          `;

    timeTable.appendToDay(day, item);
  }

  calcWidth() {
    console.log(CONST_SIZEFOR10MIN);
    return (this.length / 10) * +CONST_SIZEFOR10MIN;
  }

}

export default Break;