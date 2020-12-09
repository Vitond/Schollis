

class Break {
  constructor(props, dayEl, setElementHeightOrWidth) {

    // Duration of the break in minutess
    this.length = props.length;

    // Is it lunch?
    this.lunchTime = props.lunchTime;

    // Keeping track of the day element
    this.dayEl = dayEl;
    
    // Method for setting the element width or height based on its length in minutes
    this.setElementHeightOrWidth = setElementHeightOrWidth;
  }

  // Renders element
  render() {
    const item = document.createElement("div");

    item.className = `break`;

    item.innerHTML = `
              <div class="break__text">
              ${this.length} min
              <p>
              ${this.lunchTime ? "Oběd" : ""}
              </p>
              </div>
          `;

    this.dayEl.appendChild(item);

     // Width or height is calculated dynamically
     this.setElementHeightOrWidth(item, this.length);
  }

}

export default Break;