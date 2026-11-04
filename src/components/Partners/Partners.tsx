import bannerPartner from "../../assets/images/banners/banner-parceiros.webp";

import "./Partners.scss";

function Partners() {
  return (
    <section className="partners">
      <article
        className="partners__banner"
        style={{ backgroundImage: `url(${bannerPartner})` }}
      >
        <div className="partners__content">
          <h2 className="partners__title">Parceiros</h2>

          <p className="partners__description">
            Lorem, ipsum dolor sit amet, consectetur
          </p>

          <button type="button" className="partners__button">
            Confira
          </button>
        </div>
      </article>

      <article
        className="partners__banner"
        style={{ backgroundImage: `url(${bannerPartner})` }}
      >
        <div className="partners__content">
          <h2 className="partners__title">Parceiros</h2>

          <p className="partners__description">
            Lorem, ipsum dolor sit amet, consectetur
          </p>

          <button type="button" className="partners__button">
            Confira
          </button>
        </div>
      </article>
    </section>
  );
}

export default Partners;