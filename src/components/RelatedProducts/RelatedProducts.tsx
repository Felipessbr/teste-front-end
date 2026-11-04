import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { getProducts } from "../../services/products";
import type { Product } from "../../types/Product";

import "./RelatedProducts.scss";

function RelatedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch {
        setError("Não foi possível carregar os produtos.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const nextProducts = () => {
    setCurrentIndex((previous) =>
      Math.min(previous + 1, Math.max(products.length - 4, 0))
    );
  };

  const previousProducts = () => {
    setCurrentIndex((previous) => Math.max(previous - 1, 0));
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + 4);

  return (
    <section className="related-products">
      <div className="related-products__container">
        <header className="related-products__header">
          <h2 className="related-products__title">
            Produtos relacionados
          </h2>

          <a href="#todos" className="related-products__all">
            Ver todos
          </a>
        </header>

        {loading && <p>Carregando produtos...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && products.length > 0 && (
          <div className="related-products__carousel">
            <button
              type="button"
              className="related-products__arrow related-products__arrow--left"
              onClick={previousProducts}
              disabled={currentIndex === 0}
              aria-label="Produtos anteriores"
            >
              <ChevronLeft />
            </button>

            <div className="related-products__list">
              {visibleProducts.map((product, index) => (
                <article
                  className="related-card"
                  key={`${product.productName}-${index}`}
                >
                  <div className="related-card__image">
                    <img
                      src={product.photo}
                      alt={product.productName}
                    />
                  </div>

                  <p className="related-card__description">
                    {product.descriptionShort}
                  </p>

                  <div className="related-card__pricing">
                    <strong>{formatPrice(product.price)}</strong>
                  </div>

                  <p className="related-card__shipping">
                    Frete grátis
                  </p>

                  <button
                    type="button"
                    className="related-card__buy"
                  >
                    COMPRAR
                  </button>
                </article>
              ))}
            </div>

            <button
              type="button"
              className="related-products__arrow related-products__arrow--right"
              onClick={nextProducts}
              disabled={currentIndex >= products.length - 4}
              aria-label="Próximos produtos"
            >
              <ChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default RelatedProducts;