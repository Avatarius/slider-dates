import clsx from "clsx";
import styles from "./animatedYear.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";

interface IAnimatedYearProps {
  startYear: number;
  endYear: number;
}

function AnimatedYear({ startYear, endYear }: IAnimatedYearProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const previousStartYearRef = useRef<number | null>(null);
  const previousEndYearRef = useRef<number | null>(null);
  useEffect(() => {
    previousStartYearRef.current = startYear;
    previousEndYearRef.current = endYear;
  }, [startYear, endYear]);
  useGSAP(
    () => {
      gsap.to("[data-text-left]", {
        innerText: startYear,
        snap: "innerText",
      });
      gsap.to("[data-text-right]", {
        innerText: endYear,
        snap: "innerText",
      });
    },
    { scope: containerRef, dependencies: [startYear, endYear] }
  );
  return (
    <div className={styles.container} ref={containerRef}>
      <p className={clsx(styles.text, styles.text_left)} data-text-left>
        {previousStartYearRef.current}
      </p>
      <p className={clsx(styles.text, styles.text_right)} data-text-right>
        {previousEndYearRef.current}
      </p>
    </div>
  );
}

export { AnimatedYear };
