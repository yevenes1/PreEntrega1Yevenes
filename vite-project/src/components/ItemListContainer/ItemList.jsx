import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./ItemList.module.css"

const ItemList = ({ items, isLoading }) => {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={styles['container']}>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>
              <h3 className={styles['list-name']}>{item.title}</h3>
              <img src={`/img/${item.imageId}`} />
              <p>${item.price}</p>
              <p>{item.categoryId}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

ItemList.propTypes = {
  items: propTypes.array.isRequired,
  isLoading: propTypes.bool,
};

export default ItemList;