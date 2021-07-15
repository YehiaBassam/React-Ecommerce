import './CechkOutCart.scss';

const CechkOutCart = (props) => {

    return(
            <div className="checkout-cart">
                <div className="row w-100">
                    <div className="col-md-2">
                        <div className="cart cart-img mx-auto">
                            <img src={props.image} alt="product" className="img-fluid"/>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="cart cart-name">
                            <p>{props.name}</p>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="cart cart-price">
                            <p className="fw-bold">{props.price.toFixed(2)} $</p>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="cart cart-quantity">
                            <p className="fw-bold">X {props.quantity}</p>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="cart cart-total-price">
                            <p className="fw-bold">{props.total_price.toFixed(2)} $</p>
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default CechkOutCart;