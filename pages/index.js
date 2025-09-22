import Layout from '../components/Layout';
import HeroCarousel from '../components/HeroCarousel';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';
import ProductSlide from '../components/ProductSlide';
import NewSlider from '../components/NewsSlider';
export default function Home() {
  const { currentLanguage } = useLanguage();
  const heroSlides = content.homepage.hero.slides || [];

  return (
    <Layout pageKey="home" navbarClass="home-navbar">
      <section id="home">
        <HeroCarousel
          slides={heroSlides}
          currentLanguage={currentLanguage}
          isRTL={currentLanguage === 'ar'}
        />

      </section>
      <ProductSlide />
      <NewSlider />
    </Layout>
  );
}
