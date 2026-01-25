import './styles.css';

export default function ProductForm() {
  return (
    <main>
      <section id="product-form-section" className="dsc-container">
        <div className="dsc-product-form-container">
          <form className="dsc-card dsc-form">
            <h2>Dados do produtos</h2>
            <div className="dsc-form-controls-container">
              <div>
                <input
                  className="dsc-form-control"
                  type="text"
                  placeholder="Nome"
                />
              </div>
              <div>
                <input
                  className="dsc-form-control"
                  type="text"
                  placeholder="Preço"
                />
              </div>
              <div>
                <input
                  className="dsc-form-control"
                  type="text"
                  placeholder="Imagem"
                />
              </div>
              <div>
                <select className="dsc-select dsc-form-control" required>
                  <option value="" disabled selected>
                    Categorias
                  </option>
                  <option value="1">cat 1</option>
                  <option value="2">cat 2</option>
                  <option value="3">cat 3</option>
                </select>
              </div>
              <div>
                <textarea
                  className="dsc-form-control dsc-textarea"
                  placeholder="Descrição"
                ></textarea>
              </div>
            </div>
            <div className="dsc-product-form-buttons">
              <button type="reset" className="dsc-btn dsc-btn-white">
                Cancelar
              </button>
              <button type="submit" className="dsc-btn dsc-btn-blue">
                Salvar
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
