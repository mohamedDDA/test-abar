import Link from 'next/link';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

const TextImageItem = ({
  item,
  index,
  className = '',
  showNavLink = false,
  navBasePath = '' // Accept base path dynamically
}) => {
  const { currentLanguage: rawLanguage } = useLanguage();

  // Allow only 'ar' or 'en'; default to 'en'
  const currentLanguage = rawLanguage === 'ar' ? 'ar' : 'en';
  
  if (!item) return null;

  // Get translations for the show more button
  const translations = content.socialDetail?.[currentLanguage] || {
    showMore: currentLanguage === 'ar' ? 'اكتشف المزيد' : 'Learn More'
  };

  // Determine layout (alternating)
  const isImageRight = index % 2 === 1;

  // Navigation URL
  const navigationUrl = item.id ? `/${navBasePath}/${item.id}` : null;

  return (
    <div className={`text-image-item ${isImageRight ? 'image-right' : 'image-left'} ${className}`}>
      <div className="text-content">
        <h2>{item.title}</h2>
        <p>{item.content}</p>
      </div>
      <div className="image-content">
        <img src={item.image} alt={item.title} />
        {showNavLink && navigationUrl && (
          <Link href={navigationUrl} className="show-more-btn">
            <span className="nav-link-button">{translations.showMore}</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default TextImageItem;
