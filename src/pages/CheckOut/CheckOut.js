import './CheckOut.scss';
import CechkOutCart from '../../components/CechkOutCart/CechkOutCart';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Fragment } from 'react';


const CheckOut = () => {

    const productsFromRedux  = useSelector((state) => state.products);
    const totalProductsPrice = useSelector((state) => state.totalProductsPrice).toFixed(2);

    const productcard = productsFromRedux.map( (product,index) =>
            <Fragment key={product.id}>
                    <CechkOutCart   image={product.image}
                                    name={product.title}
                                    quantity={product.quantity}
                                    price={product.price}
                                    total_price={product.totalPrice}
                                    />
            </Fragment>
        )


    return (
        <div className="py-4">
            <h1 className="text-primary text-center mb-5">Your Cart CheckOut</h1>
             <div className="container">
              <div className="row">
                <div className="col-md-8">

                    <div className="row w-100 cart-details">
                        <div className="col-md-3">
                            <div className="cart text-center">
                                <p className="text-muted">Image</p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="cart">
                                <p className="text-muted">name</p>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="cart">
                                <p className="text-muted">Price</p>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="cart">
                                <p className="text-muted">Qunatity</p>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="cart">
                                <p className="text-muted">total Price</p>
                            </div>
                        </div>
                    </div>

                    {productcard}
                </div>

                <div className="col-md-4 mt-md-5">
                    <div className="checkout-total text-center">
                        <p className="k">Thanks for choosing us to purchase these products...Hope you had a happy experience</p>
                        <h5 className="fw-bold mb-3">Total : {totalProductsPrice} $</h5>
                        <Link className="btn btn-primary" to="/user-form">Continue Payment</Link>
                    </div>
                </div>
              </div>        
             </div>
        </div>
    )
}

export default CheckOut;