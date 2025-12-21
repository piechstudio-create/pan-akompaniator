'use client';
import { useEffect, useState } from 'react';
import { getProducts, WooProduct } from '../services/woocommerce';

export default function ShopTracks() {
  const [products, setProducts] = useState<WooProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const data = await getProducts({ per_page: 100 });
        setProducts(data);
      } catch (err) {
        setError('Nie udało się pobrać produktów');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="shop-tracks">
        <div className="container">
          <h1>Podkłady</h1>
          <p>Ładowanie podkładów...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="shop-tracks">
        <div className="container">
          <h1>Podkłady</h1>
          <p className="error">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="shop-tracks">
      <div className="container">
        <h1>Podkłady Audio</h1>
        <p className="subtitle">Profesjonalne podkłady instrumentalne do ćwiczeń i występów</p>
        
        {products.length === 0 ? (
          <p>Brak dostępnych podkładów.</p>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                {product.images?.[0] && (
                  <img 
                    src={product.images[0].src} 
                    alt={product.images[0].alt || product.name}
                    className="product-image"
                  />
                )}
                <div className="product-content">
                  <h2 dangerouslySetInnerHTML={{ __html: product.name }} />
                  <div 
                    className="product-description" 
                    dangerouslySetInnerHTML={{ __html: product.short_description }} 
                  />
                  <div className="product-price">
                    {product.on_sale && product.regular_price !== product.price ? (
                      <>
                        <span className="regular-price">{product.regular_price} PLN</span>
                        <span className="sale-price">{product.price} PLN</span>
                      </>
                    ) : (
                      <span className="price">{product.price} PLN</span>
                    )}
                  </div>
                  {product.categories?.length > 0 && (
                    <div className="product-categories">
                      {product.categories.map((cat) => (
                        <span key={cat.id} className="category-badge">{cat.name}</span>
                      ))}
                    </div>
                  )}
                  <button className="btn-primary">
                    Dodaj do koszyka
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
