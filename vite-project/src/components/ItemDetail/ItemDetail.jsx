import PropTypes from "prop-types";
import { Link } from "react-router-dom"
import styles from "./ItemDetail.module.css"


const ItemDetail = ({ item, isLoading, addItem }) => {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (!item) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className={styles['product-container']}>
      <h1 className={styles['product-name']}>{item.title}</h1>
      <img src={`/img/${item.imageId}`} />
      <p className={styles['product-detalle']}>{item.description}</p>
      <p>${item.price}</p>
      <p>Stock: {item.stock}</p>
      <button className={styles['boton-agregar']} onClick={() => addItem(item, 1)}>Agregar al carrito</button>
      

      <Link to="/">
        <button className={styles['btn-volver']}>Volver</button>
      </Link>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
  addItem: PropTypes.func,
};

export default ItemDetail;