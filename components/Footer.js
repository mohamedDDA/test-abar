import Link from 'next/link';
import { useLanguage } from '../hooks/useLanguage';
import { siteConfig } from '../config/site';

const Footer = () => {
  const { currentLanguage, t } = useLanguage();

  const getNavLink = (key) => {
    return siteConfig.urls[currentLanguage][key];
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Company Info */}
        <div className="footer-left">
          <div className="footer-brand">
            <div className="brand-logo">
              <img src="/images/logo.png" alt="Abarhail" className="logo" />
            </div>
          </div>

          <div className="company-description">
            <p>{t('footer.companyBrief')}</p>
            <p>{t('footer.waterIMP')}</p>
          </div>

          <div className="footer-contact">
            <div className="contact-item">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.contact.address[currentLanguage])}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-text"
              >
                {siteConfig.contact.address[currentLanguage]}
              </a>
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
            </div>

            <div className="contact-item">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="contact-text"
              >
                {siteConfig.contact.phone}
              </a>
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
            </div>


            <div className="footer-social">

              <div className="social-links">
                <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fa-brands fa-x-twitter"></i>
                  <span>@ABARHAIL</span>
                </a>
                <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-tiktok"></i>
                  <span>@ABARHAIL</span>
                </a>
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-instagram"></i>
                  <span>@ABARHAIL</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Navigation */}
        <div className="footer-right">
          <div className="footer-nav-section">
            <ul className="footer-nav-list">
              <li><Link href={getNavLink('products')}>{t('footer.ourProducts')}</Link></li>
              <li><Link href={getNavLink('about')}>{t('footer.aboutAbarhail')}</Link></li>
              <li><Link href={getNavLink('news')}>{t('footer.news')}</Link></li>
              <li><Link href={getNavLink('socialResponsibility')}>{t('footer.socialResponsibility')}</Link></li>
              <li><Link href={getNavLink('quality')}>{t('footer.quality')}</Link></li>
              <li><Link href={`tel:${siteConfig.contact.phone}`}>{t('footer.contactUs')}</Link></li>
            </ul>
          </div>

          <div className="footer-app-section">
            <h4 className="footer-title">{t('footer.downloadApp')}</h4>
            <div className="app-buttons">
              <a href="https://play.google.com/store/apps/details?id=com.abarhailwater&pcampaignid=web_share" target='_blank' className="app-button google-play">
                <img src="/images/google-play.png" alt="" />
              </a>
              <a href="https://apps.apple.com/sa/app/abarhail/id6739586910" target='_blank' className="app-button">
                <img src="/images/apple.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;