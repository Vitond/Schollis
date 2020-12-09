

class Blank {
  constructor(props, dayEl, setElementHeightOrWidth) {

    // Duration of the blank space in minutes
    this.length = props.length;

    // Keeping track of the day element
    this.dayEl = dayEl;

    // Method for setting the element width or height based on its length in minutes
    this.setElementHeightOrWidth = setElementHeightOrWidth;
  }

  // Renders element
  render() {
    const item = document.createElement("div");
    item.className = `blank`;

    this.dayEl.appendChild(item);

    // Width or height is calculated dynamically
    this.setElementHeightOrWidth(item, this.length);
  }

}

export default Blank;