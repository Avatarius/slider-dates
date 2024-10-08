import { IHistoricalData } from "./types";

const historicalData: IHistoricalData[] = [
  {
    id: crypto.randomUUID(),
    title: "Живопись",
    startYear: 1980,
    endYear: 1985,
    events: [],
  },
  {
    id: crypto.randomUUID(),
    title: "Кино",
    startYear: 1987,
    endYear: 1991,
    events: [],
  },
  {
    id: crypto.randomUUID(),
    title: "Литература",
    startYear: 1992,
    endYear: 1997,
    events: [],
  },
  {
    id: crypto.randomUUID(),
    title: "Театр",
    startYear: 1999,
    endYear: 2004,
    events: [],
  },
  {
    id: crypto.randomUUID(),
    title: "Видеоигры",
    startYear: 2006,
    endYear: 2011,
    events: [],
  },
  {
    id: crypto.randomUUID(),
    title: "Наука",
    startYear: 2015,
    endYear: 2022,
    events: [],
  },

];

export { historicalData };
