
import "./FeaturedCategories.scss";

import bebidas from "../../assets/categoria-bebidas.webp";
import esportes from "../../assets/categoria-esportes-fitness.webp";
import ferramentas from "../../assets/categoria-ferramentas.webp";
import moda from "../../assets/categoria-moda.webp";
import saude from "../../assets/categoria-saude.webp";
import supermercado from "../../assets/categoria-supermercado.webp";
import tecnologia from "../../assets/categoria-tecnologia.webp";

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
