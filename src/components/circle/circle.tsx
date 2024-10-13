import { Dispatch, forwardRef, SetStateAction } from "react";
import { IHistoricalData } from "../../utils/types";
import styles from "./circle.module.scss";
import { AnimatedYear } from "../animatedYear/animatedYear";
import { useScreenSize } from "../../hooks/useScrennSize";

interface ICircleProps {
  data: IHistoricalData[];
  currentSlide: number;
  setCurrentSlide: Dispatch<SetStateAction<number>>;
  animateButton: (ind: number) => void;
  size: number;
}

const Circle = forwardRef<HTMLDivElement, ICircleProps>((props, ref) => {
  const { width } = useScreenSize();
  const { data, currentSlide, setCurrentSlide, size, animateButton } = props;
  const dataArray: IHistoricalData[] =
    data.length >= 6 ? data.slice(0, 6) : data;
  function handleClick(index: number) {
    const buttonIndex = index + 1;
    setCurrentSlide(buttonIndex);
  }

  function handleHover(index: number) {
    if (currentSlide === index + 1) return;
    animateButton(index);
  }

  const buttonsArray = dataArray.map((item, index) => {
    const { x, y } = calculatePos(index);
    return (
      <button
        key={item.id}
        className={styles.button}
        style={{ translate: `${x}px ${y}px` }}
        onClick={() => handleClick(index)}
        onMouseEnter={() => {
          handleHover(index);
        }}
        onMouseLeave={() => {
          handleHover(-1);
        }}
        data-circle-button
      >
        {index + 1}
        <h2 className={styles.button__title} data-circle-button-title>
          {data[index].title}
        </h2>
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
    <div className={styles.container}>
      <AnimatedYear
        startYear={data[currentSlide - 1].startYear}
        endYear={data[currentSlide - 1].endYear}
      />
      {width > 720 && (
        <div className={styles.circle} ref={ref}>
          {buttonsArray}
        </div>
      )}
    </div>
  );
});

export { Circle };
