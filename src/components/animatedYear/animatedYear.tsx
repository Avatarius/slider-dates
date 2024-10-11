import clsx from "clsx";
import styles from "./animatedYear.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";


interface IAnimatedYearProps {
  startYear: number;
  endYear: number;
}


function AnimatedYear({ startYear, endYear }: IAnimatedYearProps) {

  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.to('[data-text-left]', {
      innerText:{startYear},
      snap: 'innerText'
    })
  }, {scope: containerRef, dependencies: [startYear]});
  return (
    <div className={styles.container} ref={containerRef}>
      <p className={clsx(styles.text, styles.text_left)} data-text-left>{startYear}</p>
      <p className={clsx(styles.text, styles.text_right)}>{endYear}</p>
    </div>
  );
}

export { AnimatedYear };
