import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { getCartQuantity } from "../../utils";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const quantity = getCartQuantity(cart);

  return <div className="cart-counter">
            <button type="button" className="btn position-relative button-cart">
              < i className="bi bi-cart3"/>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {quantity > 0 ? quantity : "0"}
              </span>
            </button>
    </div>;
};

export default CartWidget;