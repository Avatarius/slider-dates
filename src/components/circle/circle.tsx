import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { IHistoricalData } from "../../utils/types";
import styles from "./circle.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface ICircleProps {
  data: IHistoricalData[];
  currentSlide: number;
  setCurrentSlide: Dispatch<SetStateAction<number>>;
}

function Circle({ data, currentSlide, setCurrentSlide }: ICircleProps) {
  const [circleWidth, setCircleWidth] = useState(0);
  useEffect(() => {
    if (circleRef.current?.offsetWidth) {
      setCircleWidth(circleRef.current.getBoundingClientRect().width);
    }
  }, []);


  function calculatePos(index: number) {
    const step = (2 * Math.PI) / data.length;
    const angle = step * (index * -1 - 1 + currentSlide);
    const x = (circleWidth / 2) * Math.cos(angle);
    const y = (circleWidth / 2) * Math.sin(angle);
    return { x: x, y: y };
  }

  const circleRef = useRef<HTMLDivElement>(null);
  const dataArray: IHistoricalData[] =
    data.length >= 6 ? data.slice(0, 6) : data;
  const buttonsArray = dataArray.map((item, index) => {
    const { x, y } = calculatePos(index);
    return (
      <button
        key={item.id}
        className={styles.button}
        style={{ translate: `${x}px ${y}px` }}
        onClick={() => setCurrentSlide(index)}
      >
        {index + 1}
      </button>
    );
  });

  return (
    <div className={styles.container} ref={circleRef}>
      {buttonsArray}
    </div>
  );
}

export { Circle };
