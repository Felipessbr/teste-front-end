import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import FeaturedCategories from "./components/FeaturedCategories/FeaturedCategories";
import ProductShowcase from "./components/ProductShowcase/ProductShowcase";
import Partners from "./components/Partners/Partners";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";
import Brands from "./components/brands/brands";

function App() {
  return (
    <>
      <Header />

      <main>
        <Banner />
        <FeaturedCategories />
        <ProductShowcase />
        <Partners />
        <RelatedProducts />
        <Partners />
        <Brands />
        <RelatedProducts />
      </main>
    </>
  );
}

export default App;