import {
  CONST_WIDTHFOR10MIN,
  CONST_HEIGHTFOR10MIN,
} from "../../../constants/constants";
import { convertTimeToSeconds, getCurrentTime } from "../../../utils/functions";

class Marker {
  constructor(dayEl, timeWindow, displayMode, dayObj) {
    //Where the Marker is rendered
    this.dayEl = dayEl;

    //Which time window does Timetable (and Marker) cover?
    this.timeWindow = timeWindow;

    this.displayMode = displayMode;

    this.dayObj = dayObj;
  }

  update() {
    /* const currentTime = getCurrentTime(); */

    //Getting current time in seconds from midnight
    const currentTime = globalThis.time;
    const currentTimeInSeconds = convertTimeToSeconds(currentTime);

    //Getting beginning of the displayed time window in seconds from midnight
    let beginning = null;

    if (this.displayMode === "classic") {
      beginning = this.timeWindow.start;
    } else if (this.displayMode === "schollis") {
      //Getting beginning time of the first subject
      const beginningEl = this.dayObj.elements.find((element) => {
        return element.type === "subject";
      });

      beginning = beginningEl.props.time.beginning;
    }

    const beginningInSeconds = convertTimeToSeconds(beginning);

    //Calculating difference between time window beginning and current time in seconds
    const beginningDifferenceInSeconds =
      currentTimeInSeconds - beginningInSeconds;

    //Getting end of time window in seconds from midnight
    let end = null;

    if (this.displayMode === "classic") {
      end = this.timeWindow.end;
    } else if ((this.displayMode = "schollis")) {

      //Getting ending time of the last subject
      const endingEl = [...this.dayObj.elements].reverse().find((element) => {
        return element.type === "subject";
      });
      end = endingEl.props.time.end;

    }

    const endInSeconds = convertTimeToSeconds(end);

    //Calculating difference between time window end and current time in seconds
    const endDifferenceInSeconds = endInSeconds - currentTimeInSeconds;

    //If marker is not beyond time window´s borders, displaying it and positioning it, updating active timetable element
    if (beginningDifferenceInSeconds > 0 && endDifferenceInSeconds > 0) {
      //Displaying
      this.marker.style.display = "block";

      //Positioning
      if (this.displayMode === "classic") {
        this.marker.style.left = `${
          CONST_WIDTHFOR10MIN * (beginningDifferenceInSeconds / 600)
        }rem`;
      } else if (this.displayMode === "schollis") {
        this.marker.style.top = `${
          CONST_HEIGHTFOR10MIN * (beginningDifferenceInSeconds / 600)
        }rem`;
      }

      //Getting X and Y position of marker triangle tip
      const markerPos = this.marker.querySelector('.marker__triangle').getBoundingClientRect();
      const markerTipPosX = markerPos.x + markerPos.width / 2;
      const markerTipPosY = markerPos.y + markerPos.height / 2;

      //Getting timetable element, which is marker tip touching
     
        const currentElement = document.elementsFromPoint(
          markerTipPosX,
          markerTipPosY
        )[3];
      
      //If marker tip touches timetable element, making the element active by adding "active" class
      //Else removing the "active" class
      for (const element of this.dayEl.children) {
        element.classList.remove("active");
      }
      if (currentElement) {
        currentElement.classList.add("active");
      }
    } else {
      //Undisplaying
      this.marker.style.display = "none";
    }
  }

  render() {
    const marker = document.createElement("div");
    marker.className = "marker";
    marker.innerHTML = `
            <div class="marker__triangle"></div>
            <div class="marker__line"></div>
            `;

    this.dayEl.append(marker);

    this.marker = marker;
  }
}

export default Marker;
