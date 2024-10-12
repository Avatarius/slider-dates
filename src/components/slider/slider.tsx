import { ArrowButton } from "../arrowButton/arrowButton";
import { Circle } from "../circle/circle";
import styles from "./slider.module.scss";
import { historicalData } from "../../utils/constants";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { EventsSlider } from "../eventsSlider/eventsSlider";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [circleWidth, setCircleWidth] = useState(0);
  const circleRef = useRef<HTMLDivElement>(null);
  const eventsSliderRef = useRef<HTMLDivElement | null>(null);
  const deg = -360 / historicalData.length;

  useLayoutEffect(() => {
    if (circleRef.current) {
      setCircleWidth(circleRef.current.getBoundingClientRect().width);
    }
  }, []);

  useGSAP(
    () => {
      const rotationValue = deg * currentSlide;
      const buttons: HTMLElement[] = gsap.utils.toArray(
        "[data-circle-button]",
        circleRef.current
      );
      gsap.set(circleRef.current, { rotation: rotationValue });

      buttons.forEach((btn, index) => {
        const selector = gsap.utils.selector(btn);
        gsap.set(btn, { rotation: -rotationValue });
        if (index === currentSlide - 1) {
          gsap.set(btn, {
            scale: 1,
            backgroundColor: "#f4f5f9",
          });
          gsap.set(selector("[data-circle-button-title]"), { opacity: 1 });
        } else {
          gsap.set(btn, { scale: 0.1, backgroundColor: "#000" });
          gsap.set(selector("[data-circle-button-title]"), { opacity: 0 });
        }
      });
    },
    { scope: circleRef }
  );

  useGSAP(
    () => {
      const rotationValue = currentSlide * deg;
      gsap.to(circleRef.current, {
        rotation: `${rotationValue}_short`,
      });
      gsap.to("[data-circle-button]", {
        rotation: `${-rotationValue}_short`,
      });
      animButton(currentSlide - 1, true);
    },
    { scope: circleRef, dependencies: [currentSlide] }
  );

  const { contextSafe } = useGSAP({ scope: circleRef });

  const animButton = contextSafe((ind: number, shouldAnimTitle?: boolean) => {
    const buttons: HTMLElement[] = gsap.utils.toArray(
      "[data-circle-button]",
      circleRef.current
    );
    buttons.forEach((btn, index) => {
      const selector = gsap.utils.selector(btn);
      const timeline = gsap.timeline();
      if (index === currentSlide - 1 || index === ind) {
        timeline.to(btn, { scale: 1, backgroundColor: "#f4f5f9" });
      } else {
        timeline.to(btn, { scale: 0.1, backgroundColor: "#000" });
      }
      if (!shouldAnimTitle) return;
      if (index === currentSlide - 1) {
        timeline.to(
          selector("[data-circle-button-title]"),
          { opacity: 1 },
          ">"
        );
      } else {
        timeline.to(
          selector("[data-circle-button-title]"),
          { opacity: 0 },
          "<"
        );
      }
    });
  });

  function getNewSlideValue(index: number) {
    let result = index;
    if (index > historicalData.length) {
      result = 1;
    } else if (index <= 0) {
      result = historicalData.length;
    }
    return result;
  }

  function padNumber(num: number) {
    return String(num).padStart(2, "0");
  }

  return (
    <section className={styles.container}>
      <Circle
        data={historicalData}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        size={circleWidth}
        animateButton={animButton}
        ref={circleRef}
      />
      <h1 className={styles.title}>Исторические даты</h1>
      <div className={styles.controls}>
        <p className={styles.controls__slide}>
          {padNumber(currentSlide)}/{padNumber(historicalData.length)}
        </p>
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
      <EventsSlider events={historicalData[currentSlide - 1].events} ref={eventsSliderRef}/>
    </section>
  );
}

export { Slider };
