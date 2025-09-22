import { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '../config/site';

const HeroCarousel = ({ slides, currentLanguage, isRTL = false }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!slides || slides.length <= 1) return;
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, [slides, currentSlide]);

  const goToNextSlide = () => {
    if (isTransitioning || !slides?.length) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 400);
  };

  const goToPrevSlide = () => {
    if (isTransitioning || !slides?.length) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 400);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 400);
  };

  if (!slides || slides.length === 0) {
    return (
      <div className="hero-placeholder">
        <div className="hero-content">
          {siteConfig.name?.[currentLanguage] && <h1>{siteConfig.name[currentLanguage]}</h1>}
          {siteConfig.description?.[currentLanguage] && <p>{siteConfig.description[currentLanguage]}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="hero-carousel" dir={isRTL ? 'rtl' : 'ltr'}>
      {slides.map((slide, index) => {
        const slideUrl = slide.link ? siteConfig.urls?.[currentLanguage]?.[slide.link] : null;
        const hasTitle = slide.title?.[currentLanguage];
        const hasDesc = slide.description?.[currentLanguage];
        const hasButton = slide.buttonText?.[currentLanguage] && slideUrl;

        return (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: slide.image ? `url(${slide.image})` : 'none' }}
          >
            <div className="hero-content">
              {hasTitle && <h1>{slide.title[currentLanguage]}</h1>}
              {hasDesc && <p>{slide.description[currentLanguage]}</p>}
              {hasButton && (
                <Link href={slideUrl} className="hero-button">
                  {slide.buttonText[currentLanguage]}
                </Link>
              )}
            </div>
          </div>
        );
      })}

      {slides.length > 1 && (
        <>
          <button
            className="hero-nav prev"
            onClick={goToPrevSlide}
            disabled={isTransitioning}
            aria-label="Previous slide"
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button
            className="hero-nav next"
            onClick={goToNextSlide}
            disabled={isTransitioning}
            aria-label="Next slide"
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </>
      )}

      {slides.length > 1 && (
        <div className="hero-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroCarousel;
