import { useState, Fragment } from "react";
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
      <div className={styles.wrapper}>
        <div className={styles["services-container"]}>
          {services.map((service, index) => {
            if (service.desktop === false && window.innerWidth >= 1024) return;
            if (service.desktop === true && window.innerWidth < 1024) return;
            if (Array.isArray(service)) {
              return (
                <div key={index + styles.wrapper}>
                  {service.map((item, index) => (
                    <div key={index + item.title + styles.wrapper}>
                      <h5 className={styles.title}>{item.title}</h5>
                      <ul className={styles.list}>
                        {item.links.map((link, index) => (
                          <a
                            key={index + link.url + styles.link}
                            className={styles.link}
                            href={link.url}
                          >
                            {link.value}
                          </a>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              );
            }
            return (
              <div>
                <h5 className={styles.title}>{service.title}</h5>
                <ul className={styles.list}>
                  {service.links.map((link, index) => (
                    <a
                      key={index + link.url}
                      className={styles.link}
                      href={link.url}
                    >
                      {link.value}
                    </a>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className={styles["images-container"]}>
          {images.map((image) => {
            if (image.desktop === false && window.innerWidth >= 1024) return;
            if (image.desktop === true && window.innerWidth < 1024) return;
            if (image.links === true) {
              return (
                <div className={styles["social-links"]}>
                  <img className={styles.image} src={image.src} />
                  <div>
                    <div className={styles.icon}>
                      <i className="fab fa-facebook-f"></i>
                    </div>
                    <div className={styles.icon}>
                      <i className="fab fa-twitter"></i>
                    </div>
                    <div className={styles.icon}>
                      <i className="fab fa-youtube"></i>
                    </div>
                    <div className={styles.icon}>
                      <i className="fab fa-instagram"></i>
                    </div>
                    <div className={styles.icon}>
                      <i className="fab fa-linkedin-in"></i>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <div>
                <img className={styles.image} src={image.src} />
              </div>
            );
          })}
        </div>
      </div>
      <div className={`navigation-wrapper ${styles["desktop-hidden"]}`}>
        <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>
          {sliderImages.map((image, index) => (
            <div
              key={index + image}
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
      <div className={styles.slider}>
        {sliderImages.map((image, index) => (
          <div key={index + image + styles.logo} className={styles.logo}>
            <img src={image} />
          </div>
        ))}
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
