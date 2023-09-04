const CartWidget = () => {
    return <div>
        <button className="btn btn-outline-primary position-relative">
            <i className="bi bi-bag"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
                <span className="visually-hidden">productos en carrito</span>
            </span>
        </button>
    </div>
}

export default CartWidget;