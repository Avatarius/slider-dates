interface IYearsEvents {
  year: number;
  description: string;
}

interface IHistoricalData {
  id: string;
  title: string;
  startYear: number,
  endYear: number;
  events: IYearsEvents[];
}


export type {IHistoricalData, IYearsEvents};
