// pages/[...slug].js
import { useRouter } from 'next/router';
import Quality from './quality';
import About from './about';

import SocialResponsibility from './social-responsibility';
import News from './news';
import Products from './products';

export default function SlugPage() {
  const { query } = useRouter();
  const slug = query.slug?.[0];
  const id = query.slug?.[1]; // Get the ID from second slug part

  switch (slug) {
    case 'الجودة':
      return <Quality />;
    case 'عن-آبار-حائل':
      return <About />;
    case 'المسؤولية-الاجتماعية':
      return <SocialResponsibility />;
    case 'الأخبار':
      return <News />;
    case 'المنتجات':
      return <Products />;
    default:
      return <div>Page not found</div>;
  }
}