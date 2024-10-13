import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { IYearsEvents } from "../../utils/types";
import { EventCard } from "../eventCard/eventCard";
import styles from "./eventsSlider.module.scss";
import { ArrowButton } from "../arrowButton/arrowButton";
import clsx from "clsx";
import { forwardRef, useEffect, useRef } from "react";

interface IEventsSlider {
  events: IYearsEvents[];
}

const EventsSlider = forwardRef<HTMLDivElement, IEventsSlider>(
  ({ events }, ref) => {
    const buttonLeftRef = useRef<HTMLButtonElement>(null);
    const buttonRightRef = useRef<HTMLButtonElement>(null);

    return (
      <div className={styles.container} ref={ref}>
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
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={2}
          navigation={{
            prevEl: buttonLeftRef.current,
            nextEl: buttonRightRef.current,
          }}
          pagination={{clickable: true}}
          breakpoints={{
            720: {
              slidesPerView: 3,
              spaceBetween: 20,
              pagination: false
            }
          }}
        >
          {events.map((event) => {
            const { id, year, description } = event;
            return (
              <SwiperSlide key={id}>
                <EventCard year={year} description={description} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  }
);

export { EventsSlider };
