import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";
import { IYearsEvents } from "../../utils/types";
import { EventCard } from "../eventCard/eventCard";
import styles from "./eventsSlider.module.scss";
import { ArrowButton } from "../arrowButton/arrowButton";
import clsx from "clsx";
import { useRef } from "react";

interface IEventsSlider {
  events: IYearsEvents[];
}

function EventsSlider({ events }: IEventsSlider) {
  const buttonLeftRef = useRef<HTMLButtonElement>(null);
  const buttonRightRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={styles.container}>
      <ArrowButton
        side={false}
        additionalClasses={clsx(styles.button, styles.button_left)}
        ref={buttonLeftRef}
      />
      <ArrowButton
        side={true}
        additionalClasses={clsx(styles.button, styles.button_right)}
        ref={buttonRightRef}
      />
      <Swiper
        modules={[Navigation]}
        spaceBetween={80}
        slidesPerView={3}
        navigation={{
          prevEl: buttonLeftRef.current,
          nextEl: buttonRightRef.current,
        }}
      >
        {events.map((event) => (
          <SwiperSlide>
            <EventCard year={event.year} description={event.description} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export { EventsSlider };
