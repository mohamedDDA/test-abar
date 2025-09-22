import { useLanguage } from '../hooks/useLanguage';
import Navbar from './Navbar';
import Footer from './Footer';
import SEOHead from './SEOHead';

const Layout = ({ children, pageKey, seoConfig, navbarClass = "" }) => {
  const { currentLanguage, isRTL } = useLanguage();
  
  return (
    <div className={`layout ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <SEOHead 
        pageKey={pageKey} 
        language={currentLanguage}
        customConfig={seoConfig}
      />
      <Navbar specialClass={navbarClass} />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
