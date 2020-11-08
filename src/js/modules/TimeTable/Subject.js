import {CONST_SIZEFOR10MIN} from '../../constants/constants.js';

class Subject {
  constructor(baseSubj, information) {
    if (baseSubj) {
      for (const key in baseSubj) {
        this[key] = baseSubj[key];
      }
    }

    if (information) {
      for (const key in information) {
        this[key] = information[key];
      }
    }

    if (!(baseSubj || information)) {
      this.isBlank = true;
    }
  }

  render(day, timeTable) {
    const item = document.createElement("div");
    item.className = "subject";

    if (this.attr == "crosschecked" || this.attr == "changed") {
      item.classList.add(`subject--${this.attr}`);
    }

    if (!this.isBlank) {
      item.innerHTML = `
          <div class="subject__symbol">
              ${this.symbol}
          </div>
          <div class="subject__classroom">
          ${this.classroom}
          </div>
          <div class="subject__teacher">
          ${this.teacher}
          </div>
     `;
    }

    item.style.width = `${4.5 * CONST_SIZEFOR10MIN}rem`;

    timeTable.appendToDay(day, item);
  }
}

export default Subject;