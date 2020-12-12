

class Subject {
  constructor(props, dayEl, setElementHeightOrWidth) {

    // If the subject is based on another subject, copying all its key-value pairs
    if (props.baseSubj) {
      for (const key in props.baseSubj) {
        this[key] = props.baseSubj[key];
      }
    }
    ;

    // If information ({symbol: "", classroom: "", teacher: "", attr: ""} ) is provided, overriding the values of the base subject
    if (props.information) {
      for (const key in props.information) {
        this[key] = props.information[key];
      }
      
    }

    // If baseSbj doesn´t exist and information isn´t provided, returning
    if (!(props.baseSubj || props.information)) {
      return;
    }

    this.length = 45;
    this.timeAxis = props.timeAxis;
    this.displayMode = props.displayMode;

    if (dayEl) {
      this.dayEl = dayEl;
    }

    if (props.number) {
      this.number = props.number;
    }

    // Method for setting the element width or height based on its length in minutes
    this.setElementHeightOrWidth = setElementHeightOrWidth;
  }

  render () {
    const item = document.createElement("div");
    item.classList = `subject`;

    // Two types of attributes are supported - crosschecked and changed
    if (this.attr == "crosschecked" || this.attr == "changed") {
      item.classList.add(`subject--${this.attr}`);
    }

      const time = this.displayMode === 'schollis' || this.timeAxis ? '<div class="subject__time"> 10:00 - 10:45 </div>' : '';
      const number = this.displayMode === 'schollis' || this.timeAxis ? `<div class="subject__number"> ${this.number} </div>` : '';
      item.innerHTML = `
          <div class="subject__symbol">
              ${this.symbol}
          </div>
          <div class="subject__group">
            <div class="subject__classroom">
            ${this.classroom}
            </div>
            <div class="subject__teacher">
            ${this.teacher}
            </div>
          </div>
          ${time}
          ${number}
     `;

    this.dayEl.appendChild(item);

     // Width or height is calculated dynamically
     this.setElementHeightOrWidth(item, this.length);
  }
}

export default Subject;