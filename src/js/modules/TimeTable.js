import Day from "./TimeTable/Day.js";
import { getTodayDate } from "../utils/functions";
import { DISPLAYMODE_CLASSIC, DISPLAYMODE_SCHOLLIS } from '../constants/keywords';

class TimeTable {
  constructor(parameters) {
    
    this.data = [];

    // Unique id for this timetable
    this.id = parameters.id;

    // DOM element representing this timetable
    this.hook = document.getElementById(this.id);

    // The way how timetable will appear to the user. Currently two values provided - 'classic' and 'schollis'
    if (parameters.displayMode !== DISPLAYMODE_CLASSIC && this.displayMode !== DISPLAYMODE_SCHOLLIS) {
      return;
    }
    this.displayMode = parameters.displayMode;

    this.timeWindow = parameters.timeWindow;
  }

  // Renders each day, heading and marker to the DOM
  render() {
    this.hook.classList = `timetable timetable--${this.displayMode}`;

    //If display mode is "classic", ading "timetable-wrapper" class to the parent row, so the timetable can be styled properly
    if (this.displayMode === DISPLAYMODE_CLASSIC) {
      this.hook.parentElement.classList.add("timetable-wrapper");
    } else {
      this.hook.parentElement.classList.remove("timetable-wrapper");
    }

    //Rendering timetable heading
    const heading2 = document.createElement("h2");
    heading2.classList = "heading-secondary";
    heading2.textContent = "Rozvrh";
    this.hook.appendChild(heading2);

    //Rendering each day
    for (const dayObj of this.data) {
      const day = new Day(this.hook, dayObj, this.displayMode, this.timeWindow);
      day.render();
      
      dayObj.day = day;
    }

    //Creating Marker
    this.createMarker();
  }

  createMarker() {

    //Getting today date
    const todayDate = getTodayDate();

    //Finding appropriate dayObj for today date
    const today = this.data.find((dayObj) => {
      return dayObj.date === todayDate;
    });
  
    //If timetable covers today date, rendering Marker and starting to update it
    if (today) {
      today.day.renderMarker();
      this.startUpdatingMarker(today);
    }
  }

  //Creates an interval, in which the Marker is updated
  startUpdatingMarker (today) {
    const timeout = today.day.startUpdatingMarker();

    //Storing the timeout, so it can later be cleared
    this.updateMarkerTimeout = timeout;
  }

  // Removes each day from the DOM
  clear() {

    //Clearing the Marker update timeout 
    clearTimeout(this.updateMarkerTimeout);

    for (const dayElement of Array.from(this.hook.children)) {
      dayElement.parentElement.removeChild(dayElement);
    }
  }

  changeDisplayMode(displayMode) {
    this.displayMode = displayMode;

    this.clear();
    this.render();
  }
}

export default TimeTable;
