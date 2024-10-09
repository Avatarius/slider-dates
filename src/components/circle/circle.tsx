import { useEffect, useRef, useState } from "react";
import { IHistoricalData } from "../../utils/types";
import styles from "./circle.module.scss";

interface ICircleProps {
  data: IHistoricalData[];
}

function Circle({ data }: ICircleProps) {
  const [circleWidth, setCircleWidth] = useState(0);
  useEffect(() => {
    if (circleRef.current?.offsetWidth) {
      setCircleWidth(circleRef.current.getBoundingClientRect().width);

    }
  }, []);

  function calculatePos(index: number) {
    const step = (2 * Math.PI) / data.length;
    const angle = step * index;
    const x = circleWidth / 2  * Math.cos(angle);
    const y = circleWidth / 2 * Math.sin(angle);
    return {x, y};
  }


  const circleRef = useRef<HTMLDivElement>(null);
  const dataArray: IHistoricalData[] =
  data.length >= 6 ? data.slice(0, 6) : data;
  const buttonsArray = dataArray.map((item, index) => {
    const {x, y} = calculatePos(index);
    return (<button key={item.id} className={styles.button} style={{translate: `${x}px ${y}px`}}>
      {index + 1}
    </button>)
  });

  return (
    <div className={styles.container} ref={circleRef}>
      {buttonsArray}
    </div>
  );
}

export { Circle };
