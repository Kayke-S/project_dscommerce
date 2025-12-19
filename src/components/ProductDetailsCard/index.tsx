import computerImg from "../../assets/computer.png";
import ProductCategory from "../ProductCategory";

import "./styles.css"

export default function ProductDetailsCard() {
    return (
         <div className="dsc-card dsc-mb20">
                <div className="dsc-product-details-top dsc-line-bottom">
                    <img src={computerImg} alt="Imagem do computador" />

                </div>

                <div className="dsc-product-details-bottom">
                    <h3>R$ 5000,00</h3>
                    <h4>Computador Gamer XT</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima tempora facere suscipit, iusto
                        voluptatibus explicabo excepturi amet repellat officiis placeat reprehenderit laborum expedita
                        dolore adipisci saepe cupiditate vero, temporibus aliquid nulla tenetur cum autem necessitatibus
                        harum. Ad quas, odit similique laudantium libero suscipit quo laborum ex ipsa. Laboriosam, amet.
                        Cumque.</p>

                    <div className="dsc-category-container">
                        <ProductCategory />
                        <ProductCategory />
                    </div>

                </div>
            </div>
    );
}