import "./styles.css";
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import { useEffect, useState } from "react";
import type { ProductDTO } from "../../../models/product";
import * as productService from "../../../services/product-service";
import type { CategoryDTO } from "../../../models/category";

export default function Catalog() {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  const objTest: CategoryDTO = {
    id: 8,
    name: "Jardinagem",
  };

  useEffect(() => {

   // localStorage.setItem("minhaCategoria", JSON.stringify(objTest));

   const obj = localStorage.getItem("minhaCategoria");

   console.log(JSON.parse(obj!));

    productService.findAll().then((response) => {
      if (response.data) {
        const products = response.data.content;
        setProducts(products);
      }
    });
  }, products);

  return (
    <>
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar />
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            {products.map((product) => (
              <CatalogCard key={product.id} product={product} />
            ))}
          </div>
          <ButtonNextPage />
        </section>
      </main>
    </>
  );
}
