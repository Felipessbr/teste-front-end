
import "./FeaturedCategories.scss";

import bebidas from "../../assets/images/categories/categoria-bebidas.webp";
import esportes from "../../assets/images/categories/categoria-esportes-fitness.webp";
import ferramentas from "../../assets/images/categories/categoria-ferramentas.webp";
import moda from "../../assets/images/categories/categoria-moda.webp";
import saude from "../../assets/images/categories/categoria-saude.webp";
import supermercado from "../../assets/images/categories/categoria-supermercado.webp";
import tecnologia from "../../assets/images/categories/categoria-tecnologia.webp";

const categories = [
  { name: "Tecnologia", image: tecnologia },
  { name: "Supermercado", image: supermercado },
  { name: "Bebidas", image: bebidas },
  { name: "Ferramentas", image: ferramentas },
  { name: "Saúde", image: saude },
  { name: "Esportes e fitness", image: esportes },
  { name: "Moda", image: moda },
];

function FeaturedCategories() {
  return (
    <section className="featured-categories">
      <div className="featured-categories__container">

        <div className="featured-categories__list">
          {categories.map((category) => (
            <a
              href="#"
              className="featured-categories__item"
              key={category.name}
            >
              <div className="featured-categories__image">
                <img src={category.image} alt="" />
              </div>

              <span>{category.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCategories;
