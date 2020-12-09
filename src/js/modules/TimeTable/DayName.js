class DayName {
  constructor(dayName, dayEl, date) {
    // String contaning the day name
    this.dayName = dayName;

    // Keeping track of the day element
    this.dayEl = dayEl;

    this.date = date;

    this.showDayNameAbbreviation = true;
  }

  render() {
    const item = document.createElement("div");
    item.className = `timetable__dayname`;

    let dayName = this.dayName;

    if (this.showDayNameAbbreviation) {
      dayName = dayName.slice(0, 2);
    }

    const splittedDate = this.date.split('.');
    const visibleDate = splittedDate[0] + '.' + splittedDate[1];

    item.innerHTML = `
      <p class="timetable__dayname-text">
           ${dayName} ${visibleDate}
      </p>
        `;
        
    this.dayEl.append(item);
  }
}
export default DayName;
