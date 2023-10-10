import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { getCartTotal, mapCartToOrderItems } from "../../utils";
import { serverTimestamp } from "firebase/firestore";
import { createOrder  } from "../../services";
import styles from "./CheckOut.module.css"

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
            <h2 className={styles['container-resume']}>Resumen de la compra</h2>
            {orderId && <p>El id de la orden es: {orderId}</p>}
            {!orderId && (
              <>  
                <div className={styles['container']}>
                    <h4>Formulario de contacto</h4>
                    
                    <div>
                        <input name="name" type="text" className={styles['feedback-input']} placeholder="Name" />   
                        <input name="email" type="text" className={styles['feedback-input']} placeholder="Email" />
                        <input name="celular" type="tel" className={styles['feedback-input']} placeholder="Tel" />

                    </div>
                </div> 
                

                <div>
                    <h4 className={styles['products-container']}>Resumen de tus productos</h4>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id} className={styles['li-cart']}>
                                <img className={styles['img-cart']} src={`/img/${item.imageId}`} alt={item.title} />
                               <div className={styles['info-cart']}>
                               <p className={styles['name-cart']}>{item.title}</p>
                                <p className={styles['cant-cart']}>Cantidad: {item.quantity}</p>
                                <p className={styles['price-cart']}>Subtotal: ${item.price * item.quantity}</p>
                               </div>
                            </li>
                            
                        ))}
                        <div>
                        <p className={styles['total-compra']}>TOTAL DE TU COMPRA: ${total}</p>
                        </div>
                    </ul>
                </div>

                

                <div className={['fin-btn']}>
                <button onClick={handleCheckOut}>Finalizar compra</button>
                </div>

                {isLoading && <p>Procesando....</p>}
               </>
            )}                
        </div>
    )
}

export default CheckOut;