import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { productsData } from '../data/products';
import ProductCard from './ProductCard';
import { content } from '../data/content';
import Link from 'next/link';
import { siteConfig } from "../config/site";

export default function ProductSlide() {
    const { currentLanguage } = useLanguage();
    const bannerRef = useRef(null);
    const animationRef = useRef(null);
    const [totalProducts, setTotalProducts] = useState(10);

    const getNavLink = (key) => siteConfig.urls[currentLanguage][key];

    const pageContent = content.pages.products[currentLanguage];

    // Dynamically calculate number of products based on screen width
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const calculatedProducts = Math.max(10, Math.ceil(window.innerWidth / 400 * 3));
            setTotalProducts(calculatedProducts);
        }
    }, []);

    // Infinite scrolling animation
    useEffect(() => {
        if (!bannerRef.current) return;

        const banner = bannerRef.current;
        const productElements = banner.querySelectorAll('.product-slide-item');
        const itemWidth = 300 + 180; // card width + spacing
        const scrollSpeed = 1;

        // Set initial position
        productElements.forEach((item, index) => {
            item.style.left = `${index * itemWidth}px`;
        });

        function scrollProducts() {
            productElements.forEach((item) => {
                let currentX = parseInt(item.style.left, 10);
                let newX = currentX - scrollSpeed;

                if (newX + itemWidth < 0) {
                    const maxLeft = Math.max(...Array.from(productElements).map(i => parseInt(i.style.left, 10)));
                    item.style.left = `${maxLeft + itemWidth}px`;
                } else {
                    item.style.left = `${newX}px`;
                }
            });

            animationRef.current = requestAnimationFrame(scrollProducts);
        }

        animationRef.current = requestAnimationFrame(scrollProducts);

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [totalProducts]);

    // Render products in the sliding track
    const renderProducts = () => {
        const productElements = [];
        for (let i = 0; i < totalProducts; i++) {
            const product = productsData[i % productsData.length]; // raw product object
            productElements.push(
                <div
                    key={`product-${i}`}
                    className="product-slide-item"
                    style={{ position: 'absolute' }}
                >
                    <ProductCard product={product} />
                </div>
            );
        }
        return productElements;
    };

    return (

        <section className='product-banner'>
            <h2 className='products-page-title'>
                {pageContent.title}
            </h2>
            <div className="product-slide">
                <div className="product-slide-track" ref={bannerRef}>
                    {renderProducts()}
                </div>
            </div>
            <Link href={getNavLink("products")} className='show-more-btn'>{pageContent.showMore}</Link>

        </section>
    );
}
