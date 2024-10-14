import { historicalData } from "./constants";
import { IHistoricalData } from "./types";

function fetchData() {
  const arr: IHistoricalData[] = Array.from(historicalData);
  const data = arr.length >= 6 ? arr.slice(0, 6) : arr;
  return Promise.resolve(data);
}

export { fetchData };
