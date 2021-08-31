import { useState } from "react";
import styles from "./styles.module.css";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function Footer({ services, images, sliderImages }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    centered: true,
    spacing: 100,
  });

  return (
    <>
      <div className={styles.Wrapper}>
        {services.map((service) => {
          return (
            <div>
              <h5 className={styles.title}>{service.title}</h5>
              <ul className={styles.list}>
                {service.links.map((link) => (
                  <a className={styles.link} href={link.url}>
                    {link.value}
                  </a>
                ))}
              </ul>
            </div>
          );
        })}
        {images.map((image) => (
          <div>
            <img className={styles.image} src={image} />
          </div>
        ))}
      </div>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>
          {sliderImages.map((image, index) => (
            <div
              className={`keen-slider__slide number-slide${index + 1} ${
                styles.logo
              }`}
            >
              <img src={image} />
            </div>
          ))}
          {slider && (
            <>
              <ArrowLeft
                onClick={(e) => e.stopPropagation() || slider.prev()}
                disabled={currentSlide === 0}
              />
              <ArrowRight
                onClick={(e) => e.stopPropagation() || slider.next()}
                disabled={currentSlide === slider.details().size - 1}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

const ArrowLeft = (props) => {
  const disabled = props.disabled ? ` ${styles["arrow--disabled"]}` : "";
  return (
    <svg
      onClick={props.onClick}
      className={`${styles.arrow} ${styles["arrow--left"]}` + disabled}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
};

const ArrowRight = (props) => {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`${styles.arrow} ${styles["arrow--right"]}` + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
};
