import cartIcon from "../../assets/cart.svg";
import "./styles.css";

export default function CartIcon() {
  return (
    <>
      <img src={cartIcon} alt="Carrinho de produtos" />
      <div className="dsc-cart-count">2</div>
    </>
  );
}
