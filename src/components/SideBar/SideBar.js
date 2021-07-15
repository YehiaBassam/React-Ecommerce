import './SideBar.scss';
import Backdrop from '../Backdrop/Backdrop';
import { useSelector } from "react-redux";
import { Fragment } from 'react';


const SideBar = (props) => {

    const productsQuantity  = useSelector((state) => state.totalQuantity);
    const productsFromRedux = useSelector((state) => state.products);
    const totalProductsPrice = useSelector((state) => state.totalProductsPrice).toFixed(2);

    console.log(productsFromRedux)

    const productsInCart = productsFromRedux.map( (product,index) =>
                <Fragment key={product.id}>
                <li className="mb-4">
                    <div className="row justify-content-between align-items-center mx-0 pe-0 pe-lg-3">
                        <div className="col-3">
                            <div className="cart-product-image ms-0 ms-lg-4">
                                <img src={product.image} className="w-100 h-100" alt="product"></img>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="text-center cart-product-quantity">
                                <p className="mb-0 fw-bold">X{product.quantity}</p>
                            </div>
                        </div>

                        <div className="col-5">
                            <div className="text-center cart-product-total-price">
                                <p className="text-center mb-0">{product.totalPrice.toFixed(2)}</p>
                            </div>
                        </div>


                    </div>
                </li>
            </Fragment>
        )

    return (

        <Fragment>

            <div className="side-bar-icon" onClick={props.showsidebar}>
                <i className="fas fa-shopping-bag fa-2x"></i>
            </div>

        {props.sideBar ?  
                    <div>
                        <Backdrop hideSideBar={props.hideSideBar}/>

                        <div className="sidedrawer ps-3">
                            <h1 className="text-primary mb-3">Cart</h1>

                            <div className="row justify-content-between align-items-center mx-0 pe-0 pe-lg-3">
                        <div className="col-3">
                            <div className="cart-product-image ms-0 ms-lg-4">
                                <p className="text-muted">Image</p>
                            </div>
                        </div>


                        <div className="col-4">
                            <div className="text-center cart-product-quantity">
                                <p className="text-muted">quantity</p>
                            </div>
                        </div>

                        <div className="col-5">
                            <div className="text-center cart-product-total-price">
                                <p className="text-muted">total price</p>
                            </div>
                        </div>

                    </div>
                            

                        <ul className="products-sidebar-list">
                            {productsQuantity > 0 ?
                            productsInCart
                            :<h5 className="text-center mt-5 text-danger">there is no products in cart</h5>}
                        </ul>

                        <div className="text-center mt-3 border w-75 mx-auto p-2">
                            <h5 className="fw-bold mb-3"><span className="text-muted ">Quantity : </span>{productsQuantity}</h5>
                            <h5 className="fw-bold mb-3"><span className="text-muted ">Total : </span>{totalProductsPrice} $</h5>
                        </div>


                    </div>
                </div> 
                    
                    : null}
        </Fragment>
    )
}

export default SideBar ;