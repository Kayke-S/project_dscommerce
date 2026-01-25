import "./styles.css";
import ImgEdit from "../../../assets/edit.svg";
import ImgDelete from "../../../assets/delete.svg";
import { useEffect, useState } from "react";
import * as productService from "../../../services/product-service";
import type { ProductDTO } from "../../../models/product";
import SearchBar from "../../../components/SearchBar";

type QueryParams = {
  page: number;
  name: string;
};

export default function ProductListing() {
  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: "",
  });

  const [isLastPage, setIsLastPage] = useState<boolean>(false);

  const [products, setProducts] = useState<ProductDTO[]>([]);

  function handleSearch(searchText: string) {
    setProducts([]);
    setQueryParams({ ...queryParams, page: 0, name: searchText });
  }

  useEffect(() => {
    productService
      .findPageRequest(queryParams.page, queryParams.name)
      .then((response) => {
        if (response.data) {
          const nextPage = response.data.content;
          setProducts(products.concat(nextPage));
          setIsLastPage(response.data.last);
        }
      });
  }, [queryParams]);

  return (
    <main>
      <section id="product-listing-section" className="dsc-container">
        <h2 className="dsc-section-title dsc-mb20">Cadastro de produtos</h2>

        <div className="dsc-btn-page-container dsc-mb20">
          <div className="dsc-btn dsc-btn-white">Novo</div>
        </div>

        <SearchBar onSearch={handleSearch} />

        <table className="dsc-table dsc-mb20 dsc-mt20">
          <thead>
            <tr>
              <th className="dsc-tb576">ID</th>
              <th></th>
              <th className="dsc-tb768">Preço</th>
              <th className="dsc-txt-left">Nome</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td className="dsc-tb576">{p.id}</td>
                <td>
                  <img
                    className="dsc-product-listing-image"
                    src={p.imgUrl}
                    alt="computer"
                  />
                </td>
                <td className="dsc-tb768">R$ {p.price.toFixed(2)}</td>
                <td className="dsc-txt-left">{p.name}</td>
                <td>
                  <img
                    className="dsc-product-listing-btn"
                    src={ImgEdit}
                    alt="Editar"
                  />
                </td>
                <td>
                  <img
                    className="dsc-product-listing-btn"
                    src={ImgDelete}
                    alt="Deletar"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!isLastPage && <div className="dsc-btn-next-page">Carregar mais</div>}
      </section>
    </main>
  );
}
