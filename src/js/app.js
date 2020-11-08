import TimeTable from './modules/TimeTable.js';
import Subject from './modules/TimeTable/Subject.js';

const timeTable1 = new TimeTable();

const matika = new Subject(null, {
  symbol: "M",
  classroom: "Septima",
  teacher: "Otáhalíková",
});
const matematickySeminar = new Subject(null, {
  symbol: "MS",
  classroom: "1.B",
  teacher: "Otáhalíková",
});
const nemcina = new Subject(null, {
  symbol: "N",
  classroom: "Učebna NJ",
  teacher: "Daňková",
});
const cestina = new Subject(null, {
  symbol: "ČJ",
  classroom: "Septima",
  teacher: "Lanková",
});
const anglictina = new Subject(null, {
  symbol: "AJ",
  classroom: "Septima",
  teacher: "Zvoníčková",
});
const programovani = new Subject(null, {
  symbol: "PG",
  classroom: "Velká IVT učebna",
  teacher: "Mariánek",
});
const telocvik = new Subject(null, {
  symbol: "TV",
  classroom: "Učebna TV3",
  teacher: "Trojánek",
});
const dejepis = new Subject(null, {
  symbol: "D",
  classroom: "Učebna D/Z",
  teacher: "Urbánek",
});
const fyzika = new Subject(null, {
  symbol: "FY",
  classroom: "Učebna FY",
  teacher: "Lorenc",
});
const deskriptiva = new Subject(null, {
  symbol: "DG",
  classroom: "Septima",
  teacher: "Mašková",
});
const chemie = new Subject(null, {
  symbol: "CH",
  classroom: "Septima",
  teacher: "Kubát",
});
const biologie = new Subject(null, {
  symbol: "BI",
  classroom: "Učebna Biologie",
  teacher: "Havlátová",
});
const zsv = new Subject(null, {
  symbol: "ZSV",
  classroom: "Septima",
  teacher: "Kurdiovská",
});
const zemepis = new Subject(null, {
  symbol: "Z",
  classroom: "Septima",
  teacher: "Trojánek",
});
//vojta
const akonverzace = new Subject(null, {
  symbol: "AK",
  classroom: "Septima",
  teacher: "Dračková",
});

timeTable1.clear();

timeTable1.data = [
  [
    ["bla", 105],
    ["sub", matematickySeminar],
    ["bre", 15],
    ["sub", nemcina],
    ["bre", 10],
    ["sub", cestina],
    ["bre", 10],
    ["sub", matika],
    ["bre", 10],
    ["sub", anglictina],
    ["bre", 30, true],
    ["sub", programovani],
    ["bre", 5],
    ["sub", programovani],
  ],
  [
    ["sub", akonverzace],
    ["bre", 5],
    ["sub", akonverzace],
    ["bre", 10],
    ["sub", telocvik],
    ["bre", 15],
    ["sub", anglictina],
    ["bre", 10],
    ["sub", dejepis],
    ["bre", 10],
    ["sub", fyzika],
    ["bre", 10],
    ["sub", nemcina, { classroom: "Septima" }],
  ],

  // [['bla', 50], ['sub', deskriptiva] , ['bre', 10], ['sub', deskriptiva], ['bre', 15] , ['sub', chemie] ,['bre', 10] ,['sub', biologie],['bre', 10] , ['sub', matika], ['bre', 10], ['sub', zsv]],
  [
    ["bla", 165],
    ["sub", chemie],
    ["bre", 10],
    ["sub", biologie],
    ["bre", 10],
    ["sub", matika],
    ["bre", 10],
    ["sub", zsv],
  ],

  [
    ["sub", matematickySeminar, { classroom: "Učebna Chemie" }],
    ["bre", 5],
    ["sub", zemepis],
    ["bre", 10],
    ["sub", anglictina],
    ["bre", 15],
    ["sub", cestina],
    ["bre", 10],
    ["sub", nemcina, { classroom: "Kvinta" }],
    ["bre", 10],
    ["sub", telocvik],
    ["bre", 10],
    ["sub", dejepis],
    ["bre", 30, true],
    ["sub", biologie],
    ["bre", 5],
    ["sub", zsv],
  ],

  [
    ["bla", 50],
    ["sub", zemepis, { classroom: "Učebna FY Riegrova" }],
    ["bre", 10],
    ["sub", matika, { classroom: "Učebna Chemie" }],
    ["bre", 15],
    ["sub", cestina, { classroom: "3.A" }],
    ["bre", 10],
    ["sub", biologie],
    ["bre", 10],
    ["sub", chemie],
    ["bre", 10],
    ["sub", fyzika, { classroom: "Septima" }],
  ],
];
timeTable1.renderData();
