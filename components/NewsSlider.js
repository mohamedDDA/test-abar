import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { newsData } from '../data/news';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';
import Link from 'next/link';
import { siteConfig } from "../config/site";
export default function NewSlider({ isRTL = false }) {
    const { currentLanguage: rawLanguage } = useLanguage();
    // Allow only 'ar' or 'en'; default to 'en'
    const currentLanguage = rawLanguage === 'ar' ? 'ar' : 'en';

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const router = useRouter();

    const getNavLink = (key) => siteConfig.urls[currentLanguage][key];
    const pageContent = content.common[currentLanguage];

    // Build slides with bilingual content
    const slides = newsData.map(item => ({
        id: item.id,
        image: item.images?.[0] || '/placeholder.jpg',
        title: item.title?.[currentLanguage] || '',
        description: item.excerpt?.[currentLanguage] || ''
    }));

    const goToNextSlide = () => {
        if (isTransitioning || slides.length <= 1) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide(prev => (prev + 1) % slides.length);
            setIsTransitioning(false);
        }, 400);
    };

    const goToPrevSlide = () => {
        if (isTransitioning || slides.length <= 1) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
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

    const handleClick = (id) => {
        router.push(`/news/${id}`);
    };

    useEffect(() => {
        if (!slides || slides.length <= 1) return;
        const interval = setInterval(goToNextSlide, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    if (!slides || slides.length === 0) {
        return <div className="slider-placeholder">No slides available</div>;
    }

    return (
        <section className='news-slider'>
            <h2 className='products-page-title'>
                {pageContent.ourNews}
            </h2>
            <div className={'slider-container'}>
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                        onClick={() => handleClick(slide.id)}
                    >
                        <div className="slide-text">
                            {slide.title && <h2>{slide.title}</h2>}
                            {slide.description && <p>{slide.description}</p>}
                        </div>
                    </div>
                ))}

                {slides.length > 1 && (
                    <>
                        <button className="slider-btn prev" onClick={goToPrevSlide} disabled={isTransitioning}><i className="fa-solid fa-angle-left"></i></button>
                        <button className="slider-btn next" onClick={goToNextSlide} disabled={isTransitioning}><i className="fa-solid fa-angle-right"></i></button>
                    </>
                )}

                {slides.length > 1 && (
                    <div className="slider-dots">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                                disabled={isTransitioning}
                            />
                        ))}
                    </div>
                )}
            </div>

            <Link href={getNavLink("news")} className='show-more-btn'>{pageContent.showMore}</Link>

        </section>
    );
}
