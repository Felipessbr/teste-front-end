
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { getProducts } from "../../services/products";
import type { Product } from "../../types/Product";

import "./ProductShowcase.scss";

function ProductShowcase() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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
    <section className="product-showcase">
      <div className="product-showcase__container">

        <h2 className="product-showcase__title">
          Produtos relacionados
        </h2>

        <nav className="product-showcase__tabs" aria-label="Categorias de produtos">
          <a href="#celular" className="active">CELULAR</a>
          <a href="#acessorios">ACESSÓRIOS</a>
          <a href="#tablets">TABLETS</a>
          <a href="#notebooks">NOTEBOOKS</a>
          <a href="#tvs">TVS</a>
          <a href="#todos">VER TODOS</a>
        </nav>

        {loading && (
          <p className="product-showcase__message">
            Carregando produtos...
          </p>
        )}

        {error && (
          <p className="product-showcase__message product-showcase__message--error">
            {error}
          </p>
        )}

        {!loading && !error && products.length === 0 && (
          <p className="product-showcase__message">
            Nenhum produto encontrado.
          </p>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="product-showcase__carousel">

            <button
              type="button"
              className="product-showcase__arrow product-showcase__arrow--left"
              onClick={previousProducts}
              disabled={currentIndex === 0}
              aria-label="Produtos anteriores"
            >
              <ChevronLeft />
            </button>

            <div className="product-showcase__list">
              {visibleProducts.map((product, index) => (
                <article
                  className="product-card"
                  key={`${product.productName}-${index}`}
                >
                  <button
                    type="button"
                    className="product-card__details"
                    onClick={() => setSelectedProduct(product)}
                    aria-label={`Ver detalhes de ${product.productName}`}
                  >
                    <div className="product-card__image">
                      <img
                        src={product.photo}
                        alt={product.productName}
                      />
                    </div>

                    <p className="product-card__description">
                      {product.descriptionShort}
                    </p>
                  </button>

                  <div className="product-card__pricing">
                    <strong>{formatPrice(product.price)}</strong>
                  </div>

                  <p className="product-card__shipping">
                    Frete grátis
                  </p>

                  <button
                    type="button"
                    className="product-card__buy"
                    onClick={() => setSelectedProduct(product)}
                  >
                    COMPRAR
                  </button>
                </article>
              ))}
            </div>

            <button
              type="button"
              className="product-showcase__arrow product-showcase__arrow--right"
              onClick={nextProducts}
              disabled={currentIndex >= products.length - 4}
              aria-label="Próximos produtos"
            >
              <ChevronRight />
            </button>

          </div>
        )}
      </div>

      {selectedProduct && (
        <div
          className="product-modal__backdrop"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="product-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Detalhes do produto"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="product-modal__close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Fechar"
            >
              <X />
            </button>

            <img
              src={selectedProduct.photo}
              alt={selectedProduct.productName}
            />

            <div className="product-modal__info">
              <h2>{selectedProduct.productName}</h2>

              <p>{selectedProduct.descriptionShort}</p>

              <strong>{formatPrice(selectedProduct.price)}</strong>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductShowcase;
