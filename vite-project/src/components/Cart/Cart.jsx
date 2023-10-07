import { useContext } from "react";
import CartContext from "../../context/CartContext";

const Cart = () => {
    const { cart, removeItem, clearCart } = useContext(CartContext);

    const isEmpty a
    return (    
        <div>
            <h1>Cart</h1>

            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        ID: {item.id} - Cantidad: {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;