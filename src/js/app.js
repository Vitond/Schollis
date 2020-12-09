import TimeTable from "./modules/TimeTable.js";
import Subject from "./modules/TimeTable/Subject.js";
import * as fcns from "./utils/functions";

//IMAGINARY TIME
globalThis.time = "12:00:00";
const updateTime = () => {
  setTimeout(() => {
    globalThis.time = fcns.convertSecondsToTime(
      fcns.convertTimeToSeconds(globalThis.time) + 60
    );
    updateTime();
  }, 1000);
};
updateTime();
//

const timeTable1 = new TimeTable({
  id: "timetable",
  type: "student",
  displayMode: "schollis",
  timeWindow: { start: "7:00:00", end: "15:20:00" },
});

// Subject data structure

/* 

{ baseSubj: subject,
  information: {
    symbol: *string*,
    classroom: *string*,
    teacher: *string*
}}

*/

const matika = new Subject({
  baseSubj: null,
  information: {
    symbol: "M",
    classroom: "Septima",
    teacher: "Otáhalíková",
  },
});
const matematickySeminar = new Subject({
  baseSubj: null,
  information: {
    symbol: "MS",
    classroom: "1.B",
    teacher: "Špnepfefernbergová",
  },
});
const nemcina = new Subject({
  baseSubj: null,
  information: {
    symbol: "N",
    classroom: "Učebna NJ",
    teacher: "Daňková",
  },
});
const cestina = new Subject({
  baseSubj: null,
  information: {
    symbol: "ČJ",
    classroom: "Septima",
    teacher: "Lanková",
  },
});
const anglictina = new Subject({
  baseSubj: null,
  information: {
    symbol: "AJ",
    classroom: "Septima",
    teacher: "Zvoníčková",
  },
});
const programovani = new Subject({
  baseSubj: null,
  information: {
    symbol: "PG",
    classroom: "Velká IVT učebna",
    teacher: "Mariánek",
  },
});
const telocvik = new Subject({
  baseSunj: null,
  information: {
    symbol: "TV",
    classroom: "Učebna TV3",
    teacher: "Trojánek",
  },
});
const dejepis = new Subject({
  baseSubj: null,
  information: {
    symbol: "D",
    classroom: "Učebna D/Z",
    teacher: "Urbánek",
  },
});
const fyzika = new Subject({
  baseSubj: null,
  information: {
    symbol: "FY",
    classroom: "Učebna FY",
    teacher: "Lorenc",
  },
});
const deskriptiva = new Subject({
  baseSubj: null,
  information: {
    symbol: "DG",
    classroom: "Septima",
    teacher: "Mašková",
  },
});
const chemie = new Subject({
  baseSubj: null,
  information: {
    symbol: "CH",
    classroom: "Septima",
    teacher: "Kubát",
  },
});
const biologie = new Subject({
  baseSubj: null,
  information: {
    symbol: "BI",
    classroom: "Učebna Biologie",
    teacher: "Havlátová",
  },
});
const zsv = new Subject({
  baseSubj: null,
  information: {
    symbol: "ZSV",
    classroom: "Septima",
    teacher: "Kurdiovská",
  },
});
const zemepis = new Subject({
  baseSubj: null,
  information: {
    symbol: "Z",
    classroom: "Septima",
    teacher: "Trojánek",
  },
});
//vojta
const akonverzace = new Subject({
  baseSubj: null,
  information: {
    symbol: "AK",
    classroom: "Septima",
    teacher: "Dračková",
  },
});

timeTable1.clear();

timeTable1.data = [
  {
    dayName: "Pondělí",
    date: "6.12.2020",
    timeAxis: true,
    elements: [
      {
        type: "subject",
        props: {
          time: { beginning: "8:45:00", end: "9:30:00" },
          number: 2,
          baseSubj: matematickySeminar,
        },
      },
      { type: "break", props: { length: 15 } },
      {
        type: "subject",
        props: {
          time: { beginning: "9:45:00", end: "10:30:00" },
          number: 3,
          baseSubj: nemcina,
        },
      },
      { type: "break", props: { length: 15 } },
      {
        type: "subject",
        props: {
          time: { beginning: "10:40:00", end: "11:25:00" },
          number: 4,
          baseSubj: cestina,
        },
      },
      { type: "break", props: { length: 10 } },
      {
        type: "subject",
        props: {
          time: { beginning: "11:35:00", end: "12:20:00" },
          number: 5,
          baseSubj: matika,
        },
      },
      { type: "break", props: { length: 10 } },
      {
        type: "subject",
        props: {
          time: { beginning: "12:30:00", end: "13:15:00" },
          number: 6,
          baseSubj: anglictina,
        },
      },
      { type: "break", props: { length: 30, lunchTime: true } },
      {
        type: "subject",
        props: {
          time: { beginning: "13:45:00", end: "14:30:00" },
          number: 7,
          baseSubj: programovani,
        },
      },
      { type: "break", props: { length: 5 } },
      {
        type: "subject",
        props: {
          time: { beginning: "14:35:00", end: "15:20:00" },
          number: 8,
          baseSubj: programovani,
        },
      },
    ],
  },
  {
    dayName: "Úterý",
    date: "7.12.2020",
    timeAxis: false,
    elements: [
      {
        type: "subject",
        props: {
          time: { beginning: "8:45:00", end: "9:30:00" },
          number: 2,
          baseSubj: matematickySeminar,
        },
      },
      { type: "break", props: { length: 15 } },
      {
        type: "subject",
        props: {
          time: { beginning: "9:45:00", end: "10:30:00" },
          number: 3,
          baseSubj: nemcina,
        },
      },
      { type: "break", props: { length: 15 } },
      {
        type: "subject",
        props: {
          time: { beginning: "10:40:00", end: "11:25:00" },
          number: 4,
          baseSubj: cestina,
        },
      },
      { type: "break", props: { length: 10 } },
      {
        type: "subject",
        props: {
          time: { beginning: "11:35:00", end: "12:20:00" },
          number: 5,
          baseSubj: matika,
        },
      },
      { type: "break", props: { length: 10 } },
      {
        type: "subject",
        props: {
          time: { beginning: "12:30:00", end: "13:15:00" },
          number: 6,
          baseSubj: anglictina,
        },
      },
      { type: "break", props: { length: 30, lunchTime: true } },
      {
        type: "subject",
        props: {
          time: { beginning: "13:45:00", end: "14:30:00" },
          number: 7,
          baseSubj: programovani,
        },
      },
      { type: "break", props: { length: 5 } },
      {
        type: "subject",
        props: {
          time: { beginning: "14:35:00", end: "15:20:00" },
          number: 8,
          baseSubj: programovani,
        },
      },
    ],
  },
  {
    dayName: "Pondělí",
    date: "7.12.2020",
    timeAxis: false,
    elements: [
      {
        type: "subject",
        props: {
          time: { beginning: "8:45:00", end: "9:30:00" },
          number: 2,
          baseSubj: matematickySeminar,
        },
      },
      { type: "break", props: { length: 15 } },
      {
        type: "subject",
        props: {
          time: { beginning: "9:45:00", end: "10:30:00" },
          number: 3,
          baseSubj: nemcina,
        },
      },
      { type: "break", props: { length: 15 } },
      {
        type: "subject",
        props: {
          time: { beginning: "10:40:00", end: "11:25:00" },
          number: 4,
          baseSubj: cestina,
        },
      },
      { type: "break", props: { length: 10 } },
      {
        type: "subject",
        props: {
          time: { beginning: "11:35:00", end: "12:20:00" },
          number: 5,
          baseSubj: matika,
        },
      },
      { type: "break", props: { length: 10 } },
      {
        type: "subject",
        props: {
          time: { beginning: "12:30:00", end: "13:15:00" },
          number: 6,
          baseSubj: anglictina,
        },
      },
      { type: "break", props: { length: 30, lunchTime: true } },
      {
        type: "subject",
        props: {
          time: { beginning: "13:45:00", end: "14:30:00" },
          number: 7,
          baseSubj: programovani,
        },
      },
      { type: "break", props: { length: 5 } },
      {
        type: "subject",
        props: {
          time: { beginning: "14:35:00", end: "15:20:00" },
          number: 8,
          baseSubj: programovani,
        },
      },
    ],
  },
  {
    dayName: "Pondělí",
    date: "7.12.2020",
    timeAxis: false,
    elements: [
      {
        type: "subject",
        props: {
          time: { beginning: "8:45:00", end: "9:30:00" },
          number: 2,
          baseSubj: matematickySeminar,
        },
      },
      { type: "break", props: { length: 15 } },
      {
        type: "subject",
        props: {
          time: { beginning: "9:45:00", end: "10:30:00" },
          number: 3,
          baseSubj: nemcina,
        },
      },
      { type: "break", props: { length: 15 } },
      {
        type: "subject",
        props: {
          time: { beginning: "10:40:00", end: "11:25:00" },
          number: 4,
          baseSubj: cestina,
        },
      },
      { type: "break", props: { length: 10 } },
      {
        type: "subject",
        props: {
          time: { beginning: "11:35:00", end: "12:20:00" },
          number: 5,
          baseSubj: matika,
        },
      },
      { type: "break", props: { length: 10 } },
      {
        type: "subject",
        props: {
          time: { beginning: "12:30:00", end: "13:15:00" },
          number: 6,
          baseSubj: anglictina,
        },
      },
      { type: "break", props: { length: 30, lunchTime: true } },
      {
        type: "subject",
        props: {
          time: { beginning: "13:45:00", end: "14:30:00" },
          number: 7,
          baseSubj: programovani,
        },
      },
      { type: "break", props: { length: 5 } },
      {
        type: "subject",
        props: {
          time: { beginning: "14:35:00", end: "15:20:00" },
          number: 8,
          baseSubj: programovani,
        },
      },
    ],
  },
  {
    dayName: "Pondělí",
    date: "5.12.2020",
    timeAxis: false,
    elements: [
      {
        type: "subject",
        props: {
          time: { beginning: "8:45:00", end: "9:30:00" },
          number: 2,
          baseSubj: matematickySeminar,
        },
      },
      { type: "break", props: { length: 15 } },
      {
        type: "subject",
        props: {
          time: { beginning: "9:45:00", end: "10:30:00" },
          number: 3,
          baseSubj: nemcina,
        },
      },
      { type: "break", props: { length: 15 } },
      {
        type: "subject",
        props: {
          time: { beginning: "10:40:00", end: "11:25:00" },
          number: 4,
          baseSubj: cestina,
        },
      },
      { type: "break", props: { length: 10 } },
      {
        type: "subject",
        props: {
          time: { beginning: "11:35:00", end: "12:20:00" },
          number: 5,
          baseSubj: matika,
        },
      },
      { type: "break", props: { length: 10 } },
      {
        type: "subject",
        props: {
          time: { beginning: "12:30:00", end: "13:15:00" },
          number: 6,
          baseSubj: anglictina,
        },
      },
      { type: "break", props: { length: 30, lunchTime: true } },
      {
        type: "subject",
        props: {
          time: { beginning: "13:45:00", end: "14:30:00" },
          number: 7,
          baseSubj: programovani,
        },
      },
      { type: "break", props: { length: 5 } },
      {
        type: "subject",
        props: {
          time: { beginning: "14:35:00", end: "15:20:00" },
          number: 8,
          baseSubj: programovani,
        },
      },
    ],
  },
];
timeTable1.render();

timeTable1.changeDisplayMode("classic");
timeTable1.changeDisplayMode("schollis");

const toggleNavBtn = document.getElementById("toggle-nav-button");
const siteNav = document.getElementById("site-nav");
const sidebarBackdrop = document.getElementById("sidebar-backdrop");
const mainArea = document.getElementById('main-area');

const toggleNavBtnClickedHandler = () => {
  toggleNavBtn.removeEventListener("click", toggleNavBtnClickedHandler);

  fcns.showOrHideEl(
    siteNav,
    "site-nav",
    () => {
      fcns.switchClass(
        toggleNavBtn,
        "toggle-nav-button--hide",
        "togle-nav-button--show"
      );
      mainArea.style.filter = 'blur(3px)';
    },
    () => {
      toggleNavBtn.addEventListener("click", toggleNavBtnClickedHandler);
      
    },
    () => {
      fcns.switchClass(
        toggleNavBtn,
        "toggle-nav-button--hide",
        "togle-nav-button--show"
      );
      mainArea.style.filter = 'none';
    },
    () => {
      toggleNavBtn.addEventListener("click", toggleNavBtnClickedHandler);
    }
  );
  fcns.showOrHideEl(sidebarBackdrop, 'sidebar__backdrop');
};

toggleNavBtn.addEventListener("click", toggleNavBtnClickedHandler);

sidebarBackdrop.addEventListener("click", () => {
  toggleNavBtn.click();
});
