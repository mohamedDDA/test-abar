import Layout from '../components/Layout';
import TextImageItem from '../components/TextImageItem';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';
import images from '../data/images'; // centralized images

export default function About() {
  const { currentLanguage } = useLanguage();
  const pageContent = content.pages.about[currentLanguage];

  if (!pageContent)
    return (
      <Layout pageKey="about">
        <div>Page not found</div>
      </Layout>
    );

  // Replace each item's image with the centralized one from images.about
  const textImageItemsWithImages = pageContent.textImageItems?.map((item) => {
    const centralizedImage = images.about[item.id] || item.image; // fallback to original if missing
    return { ...item, image: centralizedImage };
  });

  return (
    <Layout pageKey="about">
      <div className="page-container about-page">
        <div className="our-story">
          <h2>{pageContent.ourStory}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{pageContent.story}</p>
        </div>

        {/* Text Image Items Section */}
        <div className="text-image-container">
          {textImageItemsWithImages &&
            textImageItemsWithImages.map((item, index) => (
              <TextImageItem key={item.id} item={item} index={index} />
            ))}
        </div>
      </div>
    </Layout>
  );
}
