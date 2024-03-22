import { ShoppingCart } from "phosphor-react";
import { CartButton } from "./styles";

export function Cart() {
  return (
    <CartButton>
      <ShoppingCart size={22} weight="fill" />
    </CartButton>
  )
}