import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';
import Layout from '../components/Layout';
import images from '../data/images';

export default function Quality() {
  const { currentLanguage } = useLanguage();
  const bannerRef = useRef(null);
  const animationRef = useRef(null);
  const [totalLogos, setTotalLogos] = useState(15); 

  const pageContent = content.pages.quality[currentLanguage];
  const logoKeys = Object.keys(images.quailty.partnersLogo); // dynamically get logo keys

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const calculatedLogos = Math.max(15, Math.ceil(window.innerWidth / 440 * 3));
      setTotalLogos(calculatedLogos);
    }
  }, []);

  useEffect(() => {
    if (!bannerRef.current) return;

    const banner = bannerRef.current;
    const logoElements = banner.querySelectorAll('.quality-banner-logo');
    const logoWidth = 500 + 40;
    const scrollSpeed = 1;

    logoElements.forEach((logo, index) => {
      logo.style.left = `${index * logoWidth}px`;
    });

    function scrollLogos() {
      logoElements.forEach((logo) => {
        let currentX = parseInt(logo.style.left, 10);
        let newX = currentX - scrollSpeed;

        if (newX + logoWidth < 0) {
          const maxLeft = Math.max(...Array.from(logoElements).map(l => parseInt(l.style.left, 10)));
          logo.style.left = `${maxLeft + logoWidth}px`;
        } else {
          logo.style.left = `${newX}px`;
        }
      });

      animationRef.current = requestAnimationFrame(scrollLogos);
    }

    animationRef.current = requestAnimationFrame(scrollLogos);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [totalLogos]);

  const renderLogos = () => {
    const logoElements = [];
    for (let i = 0; i < totalLogos; i++) {
      const logoKey = logoKeys[i % logoKeys.length]; // loop dynamically
      const logoSrc = images.quailty.partnersLogo[logoKey];

      logoElements.push(
        <img
          key={`logo-${i}`}
          src={logoSrc}
          alt={`Certificate ${logoKey.toUpperCase()}`}
          className="quality-banner-logo"
          loading="lazy"
          style={{ position: 'absolute' }}
        />
      );
    }
    return logoElements;
  };

  return (
    <Layout pageKey="quality">
      <div className="quality-page" dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}>
        <div className="quality-header">
          <div className="quality-header-content">
            <div className="quality-header-text">
              <h1>International Organization for Standardization</h1>
            </div>
            <span className="line"></span>
            <img
              src={images.quailty.iso}
              alt="ISO Logo"
              className="quality-iso-logo"
              loading="eager"
            />
          </div>
          <div className="quality-header-titles">
            <h2>ISO 9001 QUALITY MANAGEMENT SYSTEM</h2>
            <h2 className="quality-arabic-title">نظـــــام إدارة الجــودة</h2>
          </div>
        </div>

        <div className="quality-content">
          <div className="quality-main-content">
            <div className="quality-text-section">
              <p className="quality-intro-text">{pageContent?.intro}</p>
              <p className="quality-help-text">{pageContent?.help}</p>
            </div>
            <div className="quality-image">
              <img src={images.quailty.sampleImage} alt="" />
            </div>
          </div>
        </div>

        <div className="quality-banner">
          <div className="quality-banner-track" ref={bannerRef}>
            {renderLogos()}
          </div>
        </div>
      </div>
    </Layout>
  );
}
