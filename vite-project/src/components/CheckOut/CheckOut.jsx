import { increment } from "firebase/firestore";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { getCartTotal, mapCartToOrderItems } from "../../utils";
import { serverTimestamp } from "firebase/firestore";
import { createOrder  } from "../../services";

const CheckOut = () => {
    const [orderId, setOrderId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
   const { cart, clear } = useContext(CartContext); 
   const total = getCartTotal(cart); 

   const handleCheckOut = () => {
    const order = {
        buyer: {
            name: 'John',
            phone: "123456789",
            email: "john@example.com"
        },
        items: mapCartToOrderItems(cart),
        total,
        date: serverTimestamp(),
    };
        setIsLoading(true);
        createOrder(order)
        .then((docRef) => {
            setOrderId(docRef.id);
            setIsLoading(false);
            clear();
        })
   };
     
    return (
        <div>
            <h2>Resumen de la compra</h2>
            {orderId && <p>El id de la orden es: {orderId}</p>}
            {!orderId && (
              <>  
                <div>
                    <h4>formulario de contacto</h4>
                </div> 
                

                <div>
                    <h4>productos</h4>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                <p>{item.title}</p>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Precio por unidad: ${increment.price}</p>
                                <p>Subtotal: ${item.price * item.quantity}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <p>Total sde la compra: ${total}</p>

                <button onClick={handleCheckOut}>Finalizar compra</button>

                {isLoading && <p>Procesando....</p>}
               </>
            )}                
        </div>
    )
}

export default CheckOut;