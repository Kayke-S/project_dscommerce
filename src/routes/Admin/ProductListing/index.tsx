import "./styles.css";
import ImgEdit from "../../../assets/edit.svg";
import ImgDelete from "../../../assets/delete.svg";
import { useEffect, useState } from "react";
import * as productService from "../../../services/product-service";
import type { ProductDTO } from "../../../models/product";
import SearchBar from "../../../components/SearchBar";
import ButtonNextPage from "../../../components/ButtonNextPage";
import { DialogInfo } from "../../../components/DialogInfo";
import { DialogConfirmation } from "../../../components/DialogConfirmation";

type QueryParams = {
  page: number;
  name: string;
};

export default function ProductListing() {
  const [dialogInfoData, setDialogInfoData] = useState({
    visible: false,
    message: "Operação Sucedida",
  });

  const [dialogConfirmationData, setDialogConfirmationData] = useState({
    visible: false,
    message: "Tem certeza que deseja excluir esse produto?",
  });

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

  function handleNextPageClick() {
    setQueryParams({ ...queryParams, page: queryParams.page + 1 });
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

  function handleDialogInfoCloseClick() {
    setDialogInfoData({ ...dialogInfoData, visible: false });
  }

  function handleDeleteClick() {
    setDialogConfirmationData({ ...dialogConfirmationData, visible: true });
  }

  function handleDialogConfirmationAnswer(answer: boolean) {
    if (answer) {
      console.log(answer);
    }
    setDialogConfirmationData({ ...dialogConfirmationData, visible: false });
  }

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
                    onClick={handleDeleteClick}
                    className="dsc-product-listing-btn"
                    src={ImgDelete}
                    alt="Deletar"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!isLastPage && <ButtonNextPage onNextPage={handleNextPageClick} />}
      </section>

      {dialogInfoData.visible && (
        <DialogInfo
          message={dialogInfoData.message}
          onDialogClose={handleDialogInfoCloseClick}
        />
      )}

      {dialogConfirmationData.visible && (
        <DialogConfirmation
          message={dialogConfirmationData.message}
          onDialogAnswer={handleDialogConfirmationAnswer}
        />
      )}
    </main>
  );
}
