import { useRef } from "react";
import Slider from "react-slick";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CarrosselFamosos = () => {
  const sliderRef = useRef(null);
  const slides = [
    {
      title: "Paris e Londres",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      id: "paris_london",
      link: "https://example.com/paris-london",
    },
    {
      title: "Buenos Aires",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      id: "buenos_aires",
      link: "https://example.com/buenos-aires",
    },
    {
      title: "Atacama",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      id: "atacama",
      link: "https://example.com/atacama",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    centerPadding: "0px",
    centerMode: true,
  };

  // Funções para controlar a navegação
  const handlePrev = () => sliderRef.current?.slickPrev();
  const handleNext = () => sliderRef.current?.slickNext();

  return (
    <>
      <div className={styles.carouselContainer}>
        <button className={styles.carouselBtnPrev} onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className={styles.carouselBtnNext} onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <Slider ref={sliderRef} {...settings} className={styles.carouselSlider}>
          {slides.map((slide, index) => (
            <a
              key={index}
              href={slide.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.carouselSlideLink}
            >
              <div
                className={styles.carouselSlide}
                id={styles[slide.id]}
              >
                <div className={styles.carouselCaption}>
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              </div>
            </a>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default CarrosselFamosos;
