import { Dispatch, forwardRef, SetStateAction, useEffect, useRef, useState } from "react";
import { IHistoricalData } from "../../utils/types";
import styles from "./circle.module.scss";


interface ICircleProps {
  data: IHistoricalData[];
  currentSlide: number;
  size: number;
  onClick: (index: number) => void;
}

const Circle = forwardRef<HTMLDivElement, ICircleProps>((props, ref) => {
  const { data, currentSlide, size, onClick } = props;
  const dataArray: IHistoricalData[] =
    data.length >= 6 ? data.slice(0, 6) : data;
  const buttonsArray = dataArray.map((item, index) => {
    const { x, y } = calculatePos(index);
    return (
      <button
        key={item.id}
        className={styles.button}
        style={{ translate: `${x}px ${y}px` }}
        // onClick={() => setCurrentSlide(index)}
        onClick={() => onClick(index + 1)}
        data-circle-button
      >
        {index + 1}
      </button>
    );
  });


  /* function calculatePos(index: number) {
    const step = (2 * Math.PI) / data.length;
    const angle = step * (index * -1 - 1 + currentSlide);
    const x = (size / 2) * Math.cos(angle);
    const y = (size / 2) * Math.sin(angle);
    return { x: x, y: y };
  } */
  function calculatePos(index: number) {
    const step = (2 * Math.PI) / data.length;
    const angle = step * index;
    const x = (size / 2) * Math.cos(angle);
    const y = (size / 2) * Math.sin(angle);
    return {x, y};
  }


  return (
    <div className={styles.container} ref={ref}>
      {buttonsArray}
    </div>
  );
});

export { Circle };
