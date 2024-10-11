import {
  Dispatch,
  forwardRef,
  SetStateAction,
} from "react";
import { IHistoricalData } from "../../utils/types";
import styles from "./circle.module.scss";


interface ICircleProps {
  data: IHistoricalData[];
  currentSlide: number;
  setCurrentSlide: Dispatch<SetStateAction<number>>;
  animateButton: (selector: HTMLElement, increase: boolean) => void;
  size: number;

}

const Circle = forwardRef<HTMLDivElement, ICircleProps>((props, ref) => {
  const { data, currentSlide, setCurrentSlide, size, animateButton } = props;
  const dataArray: IHistoricalData[] =
    data.length >= 6 ? data.slice(0, 6) : data;
  function handleClick(index: number) {
    const buttonIndex = index + 1;
    setCurrentSlide(buttonIndex);
  }


  const buttonsArray = dataArray.map((item, index) => {
    const { x, y } = calculatePos(index);
    return (
      <button
        key={item.id}
        className={styles.button}
        style={{ translate: `${x}px ${y}px` }}
        onClick={() => handleClick(index)}
        onMouseEnter={({target}) => {
          if (currentSlide === index + 1) {
            return;
          }
          animateButton(target as HTMLElement, true);

        }}
        onMouseLeave={({target}) => {
          if (currentSlide === index + 1) {
            return;
          }
          animateButton(target as HTMLElement, false)
        }}
        data-circle-button
      >
        {index + 1}
      </button>
    );
  });

  function calculatePos(index: number) {
    const step = (2 * Math.PI) / data.length;
    const angle = step * index;
    const x = (size / 2) * Math.cos(angle);
    const y = (size / 2) * Math.sin(angle);
    return { x, y };
  }

  return (
    <div className={styles.container} ref={ref}>
      {buttonsArray}
    </div>
  );
});

export { Circle };
