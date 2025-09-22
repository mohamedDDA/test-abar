// components/DetailPage.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from './Layout';
import { useLanguage } from '../hooks/useLanguage';
import he from 'he';
import dayjs from 'dayjs';

function cleanText(text) {
  return text ? he.decode(text) : '';
}

export default function DetailPage({ data, pageKey, contentKey }) {
  const router = useRouter();
  const { id } = router.query;
  const { currentLanguage } = useLanguage();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const found = data.find(d => d.id.toString() === id);
      setItem(found || null);
      setLoading(false);
    }
  }, [id, data]);

  if (loading) {
    return (
      <Layout pageKey={pageKey}>
        <div className="detailed-page">
          <div className="detail-container">
            <div className="loading">
              {currentLanguage === 'ar' ? 'جاري التحميل...' : 'Loading...'}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!item) {
    return (
      <Layout pageKey={pageKey}>
        <div className="detailed-page">
          <div className="detail-container">
            <div className="not-found">
              {currentLanguage === 'ar' ? 'المحتوى غير موجود' : 'Content not found'}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  const title = cleanText(item.title[currentLanguage]);
  const contentText = cleanText(item.content[currentLanguage]);
  const images = item.images || [];
  const createdAt = item.createdAt ? dayjs(item.createdAt).format('LL') : null;

  return (
    <Layout pageKey={pageKey}>
      <div className="detailed-page" dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}>
        <div className="detail-container page-container">
          <div className="detail-content">

            {/* First Image */}
            {images.length > 0 && (
              <div className="detail-main-image">
                <img
                  src={images[0]}
                  alt={title}
                  className="main-image"
                  loading="lazy"
                />
              </div>
            )}

            {/* Title */}
            <h1 className="detail-title">{title}</h1>

            {/* Created At */}
            {createdAt && <p className="detail-date">{createdAt}</p>}

            {/* Content */}
            <div className="detail-text">
              {contentText.split('\n').map((paragraph, idx) =>
                paragraph.trim() ? <p key={idx} className="content-paragraph">{paragraph}</p> : null
              )}
            </div>

            {/* Remaining Images Gallery */}
            {images.length > 1 && (
              <div className="detail-images">
                <h2 className="gallery-title">
                  {currentLanguage === 'ar' ? 'معرض الصور' : 'Photo Gallery'}
                </h2>
                <div className="gallery-grid">
                  {images.slice(1).map((img, idx) => (
                    <div key={idx} className="gallery-item">
                      <img
                        src={img}
                        alt={`${title} - ${idx + 2}`}
                        className="gallery-image"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Back Button */}
            <button
              className="back-button"
              onClick={() => router.back()}
              aria-label={currentLanguage === 'ar' ? 'العودة' : 'Go back'}
            >
              <span className="back-arrow">{currentLanguage === 'ar' ? '←' : '→'}</span>
              {currentLanguage === 'ar' ? 'العودة' : 'Back'}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
