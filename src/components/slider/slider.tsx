import { ArrowButton } from "../arrowButton/arrowButton";
import { Circle } from "../circle/circle";
import styles from "./slider.module.scss";
import { historicalData } from "../../utils/constants";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [circleWidth, setCircleWidth] = useState(0);
  const circleRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<GSAPTimeline | null>(null);
  const deg = -360 / historicalData.length;

  useLayoutEffect(() => {
    if (circleRef.current) {
      setCircleWidth(circleRef.current.getBoundingClientRect().width);
    }
  }, []);

  useGSAP(
    () => {
      const rotationValue = deg * currentSlide;
      timelineRef.current = gsap
        .timeline()
        .set(circleRef.current, { rotation: rotationValue })
        .set("[data-circle-button]", { rotation: -rotationValue })
        .set("[data-circle-button]", {scale: 0.1, backgroundColor: '#000'})
        .set(`[data-circle-button]:nth-child(${currentSlide})`, {scale: 1, backgroundColor: '#f4f5f9'})

    },
    { scope: circleRef }
  );

  useGSAP(
    () => {
      const rotationValue = currentSlide * deg;
      const duration = 1;
      timelineRef.current
        ?.to(circleRef.current, {
          rotation: `${rotationValue}_short`,
          duration: duration,
        })
        .to(
          "[data-circle-button]",
          { rotation: `${-rotationValue}_short`, duration: duration },
          "<"
        )
        .to(`[data-circle-button]:not(:nth-child(${currentSlide}))`, {scale: 0.1, backgroundColor: '#000'}, '<')
        .to(`[data-circle-button]:nth-child(${currentSlide})`, {scale: 1, backgroundColor: '#f4f5f9', duration: duration}, '<')
    },
    { scope: circleRef, dependencies: [currentSlide] }
  );

  function animateButton(selector: HTMLElement, increase: boolean) {
    if (increase) {
      gsap.to(selector, {scale: 1, backgroundColor: '#f4f5f9'});
    } else {
      gsap.to(selector, {scale: 0.1, backgroundColor: '#000'});
    }
  }


  function getNewSlideValue(index: number) {
    let result = index;
    if (index > historicalData.length) {
      result = 0;
    } else if (index <= 0) {
      result = historicalData.length;
    }
    return result;
  }

  return (
    <section className={styles.container}>
      <Circle
        data={historicalData}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        size={circleWidth}
        animateButton={animateButton}
        ref={circleRef}
      />
      <h1 className={styles.title}>Исторические даты</h1>
      <div className={styles.controls}>
        <p className={styles.controls__slide}>06/06</p>
        <div className={styles["controls__button-container"]}>
          <ArrowButton
            side={false}
            onClick={() =>
              setCurrentSlide((prev) => getNewSlideValue(prev - 1))
            }
          />
          <ArrowButton
            side={true}
            onClick={() =>
              setCurrentSlide((prev) => getNewSlideValue(prev + 1))
            }
          />
        </div>
      </div>
    </section>
  );
}

export { Slider };
