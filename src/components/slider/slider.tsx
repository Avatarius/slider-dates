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
  const circleRotateAnim = useRef<GSAPAnimation | null>(null);
  const buttonsRotateAnim = useRef<GSAPAnimation | null>(null);
  const deg = 360 / historicalData.length;
  useLayoutEffect(() => {
    if (circleRef.current) {
      setCircleWidth(circleRef.current.getBoundingClientRect().width);
    }
  }, []);

  /*   useGSAP(
    () => {
      const deg = currentSlide === 0 ? 0 : 360 / historicalData.length;
      if (
        circleRotateAnim.current?.isActive() ||
        buttonsRotateAnim.current?.isActive()
      )
        return;
      circleRotateAnim.current = gsap.to(circleRef.current, {
        rotation: `+=${deg}`,
      });
      buttonsRotateAnim.current = gsap.set("[data-circle-button]", {
        rotation: `+=${-deg}`,
        duration: 0.3,
      });
    },
    { dependencies: [currentSlide], scope: circleRef }
  ); */

  const { contextSafe } = useGSAP(
    () => {
      gsap.set(circleRef.current, { rotation: deg * -1 });
      gsap.set("[data-circle-button]", { rotation: deg });
    },
    { scope: circleRef }
  );

  const handleRotation = contextSafe((index: number) => {
    const difference = index - currentSlide;
    const sign = difference > 0 ? '+' : '-';
    // console.log(index, currentSlide);

    console.log(index);

    setCurrentSlide(index);
    const duration = 1;
    if (
      circleRotateAnim.current?.isActive() ||
      buttonsRotateAnim.current?.isActive()
    )
      return;

    circleRotateAnim.current = gsap.to(circleRef.current, {
      rotation: `${sign}=${deg}`,
      duration: duration
    });
    buttonsRotateAnim.current = gsap.to("[data-circle-button]", {
      rotation: `${sign}=${-deg}`,
      duration: duration,
    });
  });

  return (
    <section className={styles.container}>
      <Circle
        data={historicalData}
        currentSlide={currentSlide}
        size={circleWidth}
        onClick={handleRotation}
        ref={circleRef}
      />
      <h1 className={styles.title}>Исторические даты</h1>
      <div className={styles.controls}>
        <p className={styles.controls__slide}>06/06</p>
        <div className={styles["controls__button-container"]}>
          <ArrowButton
            side={false}
            // onClick={() => setCurrentSlide((prev) => prev - 1)}
            onClick={() => handleRotation(currentSlide + 1)}
          />
          <ArrowButton
            side={true}
            onClick={() => handleRotation(currentSlide - 1)}
          />
        </div>
      </div>
    </section>
  );
}

export { Slider };
