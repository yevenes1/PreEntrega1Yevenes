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
            <li key={item.id} className="card mb-3">
              <Link to={`/item/${item.id}`}>
              <img src={`/img/${item.imageId}`} className="card-img-top"/>
                <div className="card-body">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">${item.price}</p>
                  <p className="card-text">{item.categoryId}</p>
                  </div>
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