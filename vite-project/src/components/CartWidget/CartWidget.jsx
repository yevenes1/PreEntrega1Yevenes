const CartWidget = () => {
    return (
        <div className="cart-counter">
            <button type="button" className="btn position-relative button-cart">
            <i className="bi bi-cart3"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
              </span>
              <span className="visually-hidden">Productos en Carrito</span>
            </button>
        </div>
    )
}

export default CartWidget;