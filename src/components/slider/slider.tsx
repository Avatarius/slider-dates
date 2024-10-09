import { ArrowButton } from "../arrowButton/arrowButton";
import { Circle } from "../circle/circle";
import styles from "./slider.module.scss";
import { historicalData } from "../../utils/constants";
import { useState } from "react";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className={styles.container}>
      <Circle
        data={historicalData}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
      <h1 className={styles.title}>Исторические даты</h1>
      <div className={styles.controls}>
        <p className={styles.controls__slide}>06/06</p>
        <div className={styles["controls__button-container"]}>
          <ArrowButton
            side={false}
            onClick={() => setCurrentSlide((prev) => prev - 1)}
          />
          <ArrowButton
            side={true}
            onClick={() => setCurrentSlide((prev) => prev + 1)}
          />
        </div>
      </div>
    </section>
  );
}

export { Slider };
