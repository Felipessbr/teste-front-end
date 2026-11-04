import fundoBanner from "../../assets/black-friday-fundo.jpg";

import "./Banner.scss";

function Banner() {
    return (
        <section className="banner"
            style={{ backgroundImage: `url(${fundoBanner})` }}
            aria-label="Banner de divulgação da Black Friday"
        >

            <div className="banner__overlay">
                <div className="banner__content">
                    <h1 className="banner__title">Venha conhecer nossas
                        <br />
                        promoções
                    </h1>

                    <p className="banner__discount">
                        <strong>50% Off</strong> nos produtos
                    </p>

                    <button type="button" className="banner__button">
                        Ver produto
                    </button>
                </div>
            </div>
        </section>
    )
}
export default Banner;