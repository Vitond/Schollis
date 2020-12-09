import Subject from "./Subject.js";
import Blank from "./Blank.js";
import Break from "./Break.js";
import DayName from "./DayName.js";
import Marker from '../TimeTable/Marker/Marker';
import { DISPLAYMODE_CLASSIC, DISPLAYMODE_SCHOLLIS } from '../../constants/keywords';

import {
  CONST_WIDTHFOR10MIN,
  CONST_HEIGHTFOR10MIN,
} from "../../constants/constants.js";
import {
  convertTimeToSeconds,
  convertSecondsToTime,
} from "../../utils/functions";

class Day {
  constructor(timeTable, dayObj, displayMode, timeWindow) {
    // Keeping track at which timetable is the day being used
    this.timeTable = timeTable;

    // dayObj contains dayName and elements
    this.dayObj = dayObj;

    //Keeping track of the displayMode
    this.displayMode = displayMode;

    //Keeping track of the time window
    this.timeWindow = timeWindow;

    this.renderList = dayObj.elements;
  }

  // Renders all timetable elements for this day to the DOM
  render() {
    const dayEl = document.createElement("div");
    dayEl.className = `timetable__day ${
      this.dayObj.timeAxis ? "timetable__day--axis" : ""
    }`;

    // Creating day name element and rendering it
    const dayName = new DayName(this.dayObj.dayName, dayEl, this.dayObj.date);
    dayName.render();

    this.addBlanks();

    // Looping through all of this day´s timetable element, depending on their creating instance of Subject, Break or Blank
    for (const timeTableElObj of this.renderList) {
      const props = {
        ...timeTableElObj.props,
        displayMode: this.displayMode,
        timeAxis: this.dayObj.timeAxis,
      };

      const timeTableElObject =
        timeTableElObj.type === "subject"
          ? new Subject(props, dayEl, this.setElementHeightOrWidth.bind(this))
          : timeTableElObj.type === "break"
          ? new Break(props, dayEl, this.setElementHeightOrWidth.bind(this))
          : timeTableElObj.type === "blank"
          ? new Blank(props, dayEl, this.setElementHeightOrWidth.bind(this))
          : new Subject();

      // Rendering the newly created timetable element
      timeTableElObject.render();
    }

    // Appending day to the timetable
    this.timeTable.appendChild(dayEl);

    this.dayEl = dayEl;
  }

  //Creates new marker element and appends it to the day element
  renderMarker() {
    const marker = new Marker(this.dayEl, this.timeWindow, this.displayMode, this.dayObj);
    marker.render();

    this.marker = marker;
  }

  //Updates the marker position and displaying every 10 seconds
  startUpdatingMarker() {
    this.marker.update();

    return setTimeout(() => {
      this.startUpdatingMarker();
    }, 10000)
  }

  //Creates blank elements at the beginning and end of the timetable 
  addBlanks() {

    if (this.displayMode === DISPLAYMODE_CLASSIC) {

      //Getting beginning time of the first subject
      const beginningEl = this.dayObj.elements.find((element) => {
        return element.type === "subject";
      });
      const beginning = beginningEl.props.time.beginning;

      //Getting ending time of the last subject
      const endingEl = [...this.dayObj.elements].reverse().find((element) => {
        return element.type === "subject";
      });
      const end = endingEl.props.time.end;

      //Calculating difference between time window beginning and first subject beginning
      const beginningDifferenceInSeconds =
        convertTimeToSeconds(beginning) -
        convertTimeToSeconds(this.timeWindow.start);

      //If there is free space, creating a blank timetable element that precisely fits the free space
      if (beginningDifferenceInSeconds > 0) {
        this.addBlank("beginning", beginningDifferenceInSeconds);
      }

      //Calculating difference between time window ending and last subject ending
      const endingDifferenceInSeconds = convertTimeToSeconds(this.timeWindow.end) - convertTimeToSeconds(end);

      //If there is free space, creating a blank timetable element that precisely fits the free space
      if (endingDifferenceInSeconds > 0) {
        this.addBlank("end", endingDifferenceInSeconds);
      }
      
    }
  }

  //Creates a 'blank' timetable element either at the beginning or at the end of the timetable and pushes it to render list
  addBlank(position, lengthInSeconds) {

    //Converting length to minutes
    const length = lengthInSeconds / 60;

    if (position === "beginning") {

      //Creating blank object
      const blank =  {type: "blank", props: {length: length}};

      //Appending it to the beginning of render list
      this.renderList.unshift(blank);

    } else if (position === "end") {

      //Creating blank object
      const blank =  {type: "blank", props: {length: length}};

      //Appending it to the end of render list
      this.renderList.push(blank);
    }
  }

  //Calculates width or height of the timetable element. (Depends on the display mode)
  //At 'schollis' display mode, the timetable elements are organized vertically, therefore setting the height, because the height should respond to element´s length in minutes
  //At 'classic' display mode, the timetable elements are organized vertically, therefore setting the width, because the width should respond to element´s length in minutes
  //The width and height equivalents for given minute length are computed with the help of global constants
  setElementHeightOrWidth(el, length) {
    if (this.displayMode === DISPLAYMODE_CLASSIC) {

      el.removeAttribute("style");
      el.style.width = `${(length / 10) * +CONST_WIDTHFOR10MIN}rem`;

    } else if (this.displayMode === "schollis") {

      el.removeAttribute("style");
      el.style.height = `${(length / 10) * +CONST_HEIGHTFOR10MIN}rem`;

    }
  }
}

export default Day;
