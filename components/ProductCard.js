import { useLanguage } from '../hooks/useLanguage';

export default function ProductCard({ product }) {
    const { currentLanguage } = useLanguage();

    return (
        <div className="product-card">
            <div className="product-image-container">
                <img
                    src={product.image}
                    alt={product.title[currentLanguage]}
                    className="product-image"
                    onError={(e) => {
                        e.target.src = '/images/placeholder.jpg';
                    }}
                />
            </div>


            <h3 className="product-title">
                {product.title[currentLanguage]}
            </h3>
        </div>
    );
}