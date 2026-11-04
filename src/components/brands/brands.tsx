import brands from "../../assets/Group 35.svg";

import "./brands.scss";

function Brands() {
  return (
    <section className="brands">
      <h2 className="brands__title">Navegue por marcas</h2>

      <div className="brands__content">
        {Array.from({ length: 5 }).map((_, index) => (
          <div className="brands__item" key={index}>
            <img src={brands} alt="Econverse" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Brands;