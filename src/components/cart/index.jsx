// Styles
import * as Styles from "./styles";

import CartItem from "../cart-item/index";

import { useSelector } from "react-redux";
import { selectProductsTotalPrice } from "../../store/cart/cart-selectors";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { products } = useSelector(rootReducer => rootReducer.cartReducer);
  const productsTotalPrice = useSelector(selectProductsTotalPrice);

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        { products.map((product, index) => <CartItem product={ product } key={ index } />) }
      
        <Styles.CartTotal>Total: R${ productsTotalPrice }</Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
