import "./styles.css"

import computerImg from "../../assets/computer.png";

export default function CatalogCard() {
  return (
    <div className="dsc-card">
      <div className="dsc-catalog-card-top dsc-line-bottom">
        <img src={computerImg} alt="computer" />
      </div>
      <div className="dsc-catalog-card-bottom">
        <h3>R$ 5000,0</h3>
        <h4>Lorem iasperiores quis, blanditiis sapiente eius sunt ab!</h4>
      </div>
    </div>
  );
}
