import { useEffect, useState } from "react";
import { Slider } from "../slider/slider";
import { fetchData } from "../../utils/utils";
import { IHistoricalData } from "../../utils/types";

function App() {
  const [data, setData] = useState<IHistoricalData[] | null>(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchData();
        setData(response);
      } catch {
        setData(null);
      }
    };
    getData();
  }, []);
  return <main>{data && <Slider data={data} />}</main>;
}

export { App };
