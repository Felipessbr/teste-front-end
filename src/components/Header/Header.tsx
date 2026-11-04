import {
  ShieldCheck,
  Truck,
  CreditCard,
  Search,
  Heart,
  CircleUserRound,
  ShoppingCart,
  Crown,
} from "lucide-react";

import logo from "../../assets/images/icons/Group 35.svg";
import box from "../../assets/images/icons/icon-box.svg";

import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__benefit">
          <ShieldCheck size={20} />
          <span>
            Compra <strong>100% segura</strong>
          </span>
        </div>

        <div className="header__benefit">
          <Truck size={20} />
          <span>
            <strong>Frete grátis</strong> acima de R$ 200
          </span>
        </div>

        <div className="header__benefit">
          <CreditCard size={20} />
          <span>
            <strong>Parcele</strong> suas compras
          </span>
        </div>
      </div>

      <div className="header__main">
        <img
          src={logo}
          alt="Econverse"
          className="header__logo"
        />

        <div className="header__search">
          <input
            type="search"
            placeholder="O que você está buscando?"
            aria-label="Buscar produtos"
          />

          <button type="button" aria-label="Pesquisar">
            <Search size={26} />
          </button>
        </div>

        <div className="header__actions">
          <button type="button" aria-label="Comparar produtos">
           <img src={box} alt="Comparar produtos" />
          </button>

          <button type="button" aria-label="Favoritos">
            <Heart />
          </button>

          <button type="button" aria-label="Minha conta">
            <CircleUserRound />
          </button>

          <button type="button" aria-label="Carrinho">
            <ShoppingCart />
          </button>
        </div>
      </div>

      <nav className="header__nav" aria-label="Navegação principal">
        <a href="#">TODAS CATEGORIAS</a>
        <a href="#">SUPERMERCADO</a>
        <a href="#">LIVROS</a>
        <a href="#">MODA</a>
        <a href="#">LANÇAMENTOS</a>
        <a href="#" className="header__nav-highlight">
          OFERTAS DO DIA
        </a>
        <a href="#" className="header__nav-subscription">
          <Crown size={20} />
          ASSINATURA
        </a>
      </nav>
    </header>
  );
}

export default Header;