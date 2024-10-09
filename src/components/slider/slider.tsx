import { ArrowButton } from "../arrowButton/arrowButton";
import { Circle } from "../circle/circle";
import styles from "./slider.module.scss";
import { historicalData } from "../../utils/constants";
import { useEffect, useRef } from "react";

function Slider() {
  return (
    <section className={styles.container}>
      <Circle data={historicalData} />
      <h1 className={styles.title}>Исторические даты</h1>
      <div className={styles.controls}>
        <p className={styles.controls__slide}>06/06</p>
        <div className={styles["controls__button-container"]}>
          <ArrowButton side={false} />
          <ArrowButton side={true} />
        </div>
      </div>
    </section>
  );
}

export { Slider };
