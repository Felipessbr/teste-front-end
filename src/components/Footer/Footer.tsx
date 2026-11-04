import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

import logo from "../../assets/images/icons/Group 35.svg";

import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <img src={logo} alt="Econverse" />

          <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>

          <div className="footer__social">
            <a href="#instagram" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#facebook" aria-label="Facebook">
                <FaFacebookF />
            </a>

            <a href="#linkedin" aria-label="LinkedIn">
                <FaLinkedinIn />
            </a>
          </div>
        </div>

        <nav className="footer__links" aria-label="Links do rodapé">
          <div className="footer__column">
            <h3>Institucional</h3>
            <a href="#sobre">Sobre Nós</a>
            <a href="#movimento">Movimento</a>
            <a href="#trabalhe">Trabalhe conosco</a>
          </div>

          <div className="footer__column">
            <h3>Ajuda</h3>
            <a href="#suporte">Suporte</a>
            <a href="#contato">Fale Conosco</a>
            <a href="#perguntas">Perguntas Frequentes</a>
          </div>

          <div className="footer__column">
            <h3>Termos</h3>
            <a href="#termos">Termos e Condições</a>
            <a href="#privacidade">Política de Privacidade</a>
            <a href="#devolucao">Troca e Devolução</a>
          </div>
        </nav>
      </div>

      <div className="footer__bottom">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </footer>
  );
}

export default Footer;