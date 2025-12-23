import "./styles.css";

import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonInverse from "../../components/ButtonInverse";
import type { ProductDTO } from "../../models/product";

const product: ProductDTO = {
  id: 1,
  name: "Smart TV",
  description: "Esta TV é muito bonita",
  imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources-devsuperior/refs/heads/master/backend/img/2-big.jpg",
  price: 2500.99,
  categories: [
    {
      id: 2,
      name: "Eletrônicos",
    },
    {
      id: 3,
      name: "Computadores",
    },
    {
      id: 4,
      name: "Importados",
    },
  ],
};

export default function ProductDetail() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard product={product} />
          <div className="dsc-btn-page-container">
            <ButtonPrimary />
            <ButtonInverse />
          </div>
        </section>
      </main>
    </>
  );
}
