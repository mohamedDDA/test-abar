import Layout from '../components/Layout';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';
import ProductCard from '../components/ProductCard';
import { productsData } from '../data/products';

export default function Products() {
  const { currentLanguage } = useLanguage();

  const pageContent = content.pages.products[currentLanguage];
  if (!pageContent) return <Layout pageKey="products"><div>Page not found</div></Layout>;

  return (
    <Layout pageKey="products">
      <h2 className='products-page-title'>
        {pageContent.title}
      </h2>
      <div className="products-grid-container">
        <div className="products-grid">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </Layout>
  );
}