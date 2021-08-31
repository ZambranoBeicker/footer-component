import { useState } from "react";
import styles from "./styles.module.css";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function Footer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  return (
    <div className={styles.Wrapper}>
      <div>
        <h5 className={styles.title}>UNIVERSIDAD</h5>
        <ul className={styles.list}>
          <a className={styles.link} href="#">
            Ta ta ta
          </a>
          <a className={styles.link} href="#">
            Ta ta ta
          </a>
          <a className={styles.link} href="#">
            Ta ta ta
          </a>
          <a className={styles.link} href="#">
            Ta ta ta
          </a>
          <a className={styles.link} href="#">
            Ta ta ta
          </a>
          <a className={styles.link} href="#">
            Ta ta ta
          </a>
        </ul>
      </div>
      <div>
        <img
          className={styles.image}
          src="https://vrea.usm.cl/wp-content/uploads//2021/06/logo-acreditacion_blanco.svg"
        />
      </div>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className={`keen-slider__slide number-slide1 ${styles.logo}`}>
            <img src="https://vrea.usm.cl/wp-content/uploads/2021/04/logo_reuna.svg" />
          </div>
          <div className={`keen-slider__slide number-slide2 ${styles.logo}`}>
            <img src="https://vrea.usm.cl/wp-content/uploads/2021/04/logo_reuna.svg" />
          </div>
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
    </div>
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
