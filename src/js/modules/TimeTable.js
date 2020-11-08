import Subject from './TimeTable/Subject.js';
import Blank from './TimeTable/Blank.js';
import Break from './TimeTable/Break.js';

class TimeTable {

    constructor() {
      this.data = [];
      this.subjects = {};
      this.daysHook = [];
      this.timeTableHook = document.getElementById("timetable");
      this.days = new Map([
        [1, "monday"],
        [2, "tuesday"],
        [3, "wednesday"],
        [4, "thursday"],
        [5, "friday"],
      ]);
  
      this.hookDays();
  
    }
  
    hookDays() {
      for (const keyValuePair of this.days) {
        this.daysHook.push(
          this.timeTableHook.querySelector(`#${this.days.get(keyValuePair[0])}`)
        );
      }
    }
  
    appendToDay(day, item) {
      this.daysHook[day].append(item);
    }
  
    clear() {
      this.timeTableHook.firstElementChild.children.forEach((element) => {
        element.innerHTML = "";
      });
    }
  
    renderData() {
      for (const day of this.data) {
        for (const timeTableEl of day) {
          const timeTableElObject =
            timeTableEl[0] === "sub"
              ? new Subject(timeTableEl[1], timeTableEl[2])
              : timeTableEl[0] === "bre"
              ? new Break(timeTableEl[1], timeTableEl[2])
              : timeTableEl[0] === "bla"
              ? new Blank(timeTableEl[1])
              : new Subject();
          timeTableElObject.render(this.data.indexOf(day), this);
        }
      }
    }
  
    clear() {
      for (const dayElement of this.daysHook) {
        dayElement.innerHTML = "";
      }
    }
  }

export default TimeTable;