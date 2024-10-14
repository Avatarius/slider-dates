import { ArrowButton } from "../arrowButton/arrowButton";
import { Circle } from "../circle/circle";
import styles from "./slider.module.scss";
import { historicalData } from "../../utils/constants";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { EventsSlider } from "../eventsSlider/eventsSlider";
import { useFirstRender } from "../../hooks/useFIrstRender";
import { useScreenSize } from "../../hooks/useScrennSize";
import { useCircleSize } from "../../hooks/useCircleSIze";
import { AnimatedYear } from "../animatedYear/animatedYear";
import clsx from "clsx";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const eventsSliderRef = useRef<HTMLDivElement | null>(null);
  const mobileTitleRef = useRef<HTMLDivElement | null>(null);
  const circleWidth = useCircleSize(circleRef);
  const eventsSlideTimeline = useRef<GSAPTimeline | null>(null);
  const isFirstRender = useFirstRender();
  const deg = -360 / historicalData.length;
  const rotationValue = (-360 / historicalData.length) * currentSlide;
  const { width } = useScreenSize();

  useGSAP(
    () => {
        eventsSlideTimeline.current = gsap.timeline({paused: true});
        const target = (width > 720) ? [eventsSliderRef.current] : [eventsSliderRef.current, mobileTitleRef.current];
        eventsSlideTimeline.current?.to(target, {autoAlpha:0, duration: 0.2}, '<').to(target, {autoAlpha: 1}, '>');
        if (width < 720) return;
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
    { scope: (width > 720) ? circleRef : sectionRef }
  );

  useGSAP(
    () => {
      // прозрачность нижнего слайдера
      if (!isFirstRender) {
        eventsSlideTimeline.current?.restart();
      }
      if (width < 720) return;
      // вращение круга
      gsap.to(circleRef.current, {
        rotation: `${rotationValue}_short`,
      });
      gsap.to("[data-circle-button]", {
        rotation: `${-rotationValue}_short`,
      });
      // аним кнопок
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
    <section className={styles.container} ref={sectionRef}>
      <div className={styles.main}>
        <h1 className={styles.title}>Исторические даты</h1>
        {width > 720 ? (
          <Circle
            data={historicalData}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            size={circleWidth}
            animateButton={animButton}
            ref={circleRef}
          />
        ) : (
          <>
            <AnimatedYear
              startYear={historicalData[currentSlide - 1].startYear}
              endYear={historicalData[currentSlide - 1].endYear}
            />
            <div className={styles.details}>
              <h2 className={styles.details__title} ref={mobileTitleRef}>
                {historicalData[currentSlide - 1].title}
              </h2>
              <span className={styles.details__separator} />
            </div>
          </>
        )}
        {width > 720 && (
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
        )}
      </div>

      <EventsSlider
        events={historicalData[currentSlide - 1].events}
        ref={eventsSliderRef}
      />
      {width < 720 && (
        <div className={styles.controls_mobile}>
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
          <div
            className={clsx("pagination", styles.pagination)}
            id="pagination"
          ></div>
        </div>
      )}
    </section>
  );
}

export { Slider };
