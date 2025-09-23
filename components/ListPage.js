import Layout from './Layout';
import TextImageItem from './TextImageItem';
import { useLanguage } from '../hooks/useLanguage';
import he from 'he';

function cleanText(text) {
  return text ? he.decode(text) : '';
}

export default function ListPage({ pageKey, data, navBasePath }) {
  const { currentLanguage } = useLanguage();

  const transformedData = data.map(item => ({
    id: item.id,
    title: cleanText(item.title[currentLanguage] || item.title['ar'] || ''),
    content: cleanText(item.content[currentLanguage] || item.excerpt['ar'] || ''),
    image: item.images?.[0] || '/placeholder.jpg',
    date: item.created_at ? new Date(item.created_at).toLocaleDateString() : ''
  }));

  return (
    <Layout pageKey={pageKey}>
      <div className="text-image-page">
        <div className="text-image-container">
          {transformedData.map((item, index) => (
            <TextImageItem
              key={item.id}
              item={item}
              index={index}
              showNavLink={true}
              className={`${pageKey}-item`}
              navBasePath={navBasePath}
              date={item.date} // Pass date to TextImageItem
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
