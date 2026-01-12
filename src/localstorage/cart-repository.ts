import { OrderDTO } from "../models/order";

export function save(cart: OrderDTO) {
  const str = JSON.stringify(cart);
  localStorage.setItem("com.kaykesilva.dscommerce/Cart", str);
}

export function get(): OrderDTO {
  const obj = JSON.parse(
    localStorage.getItem("com.kaykesilva.dscommerce/Cart") || '{"items"=[]}'
  );

  return obj;
}
