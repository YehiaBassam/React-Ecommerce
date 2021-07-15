import './NavBar.scss';
import user_avatar from "../../assets/images/user_avatar.png";
import { Link } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { productActions } from '../../store/index';
import { Fragment , useEffect } from 'react';

const Navbar = () => {

    useEffect(() => {

        // cart toggle open/close
        document.querySelectorAll('[data-toggle~=dropdown]').forEach(setupDropdown);

        function setupDropdown(dropdownToggle) {
            dropdownToggle.setAttribute('aria-haspopup', 'true');
            dropdownToggle.setAttribute('aria-expanded', 'false');
            
            var dropdownMenu = dropdownToggle.parentNode.querySelector('.dropdown-menu');
            dropdownMenu.setAttribute('aria-hidden', 'true');
            dropdownToggle.onclick = toggleDropdown;
            
            function toggleDropdown() {
                if (dropdownToggle.getAttribute('aria-expanded') === 'true') {
                dropdownToggle.setAttribute('aria-expanded', 'false');
                dropdownMenu.setAttribute('aria-hidden', 'true');
                dropdownToggle.parentNode.classList.remove('dropdown-on');
                return;
                }
                dropdownToggle.setAttribute('aria-expanded', 'true');
                dropdownMenu.setAttribute('aria-hidden', 'false');
                dropdownToggle.parentNode.classList.add('dropdown-on');
                dropdownMenu.children[0].focus();
                return;
            }
        }
});

    const dispatch = useDispatch();

    const productsQuantity  = useSelector((state) => state.totalQuantity);
    const productsFromRedux = useSelector((state) => state.products);

    const addToCartHandler = (product) => {
        dispatch(productActions.addToCart(product));
    };

    const decreaseQuantityHandler = (product) => {
        dispatch(productActions.decreaseQuantity(product));
    };

    const removeFromCartHandler = (product) => {
        dispatch(productActions.removeFromCart(product));
    };


    const productsInCart = productsFromRedux.map( (product,index) =>
                <Fragment key={product.id}>
                <li className="mb-3">
                    <div className="row justify-content-between align-items-center mx-0 pe-0 pe-lg-3">
                        <div className="col-lg-2 col-2">
                            <div className="cart-product-image ms-0 ms-lg-4">
                                <img src={product.image} className="w-100 h-100" alt="product"></img>
                            </div>
                        </div>

                        <div className="col-lg-5 col-4">
                            <div className="text-center cart-product-name">
                                <p className="text-center mb-0">{product.title}</p>
                            </div>
                        </div>

                        <div className="col-lg-2 col-1">
                            <div className="text-center cart-product-quantity">
                                <p className="mb-0 fw-bold">X{product.quantity}</p>
                            </div>
                        </div>

                        <div className="col-lg-2 col-3">
                            <div className="text-center cart-product-increase d-flex">
                                <button className="btn btn-success me-1" onClick={()=>addToCartHandler(product)}>+</button>
                                <button className="btn btn-danger"  onClick={()=>decreaseQuantityHandler(product)}>-</button>
                            </div>
                        </div>

                        <div className="col-lg-1 col-2">
                            <div className="text-center cart-product-remove me-2">
                                <button className="btn btn-secondary" onClick={()=>removeFromCartHandler(product)}>X</button>
                            </div>
                        </div>
                    </div>
                </li>
            </Fragment>
        )

        let reviewOrder =   <Fragment>
                                <li><hr className="dropdown-divider"/></li>
                                <li className="text-center">
                                    <Link to="/checkout">
                                        <button className="btn btn-success">review order</button>
                                    </Link>
                                </li>
                            </Fragment>

    return(
        <div>

            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="/products">
                        <h1>E-commerce</h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex justify-content-center justify-content-lg-end align-items-center w-100">

                            <li className="nav-item dropdown mt-2">
                                <div className="cart me-5 mt-2 text-primary dropdown-toggle"  id="navbarDropdown"  data-toggle="dropdown" aria-expanded="false">
                                    <i className="mb-3 fas fa-shopping-cart fa-2x"></i>
                                        {productsQuantity > 0 ? <div className="items-number">{productsQuantity}</div> :null } 
                                </div>
                                <ul className="dropdown-menu">

                                    {productsInCart}


                                    {productsQuantity > 0 ?
                                    reviewOrder
                                    :<h5 className="text-center">there is no products in cart</h5>}
                                </ul>
                            </li>

                            <div>
                                <img src={user_avatar} className="user-avatar" alt="user-avatar" ></img>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>

        </div>
    )
}

export default Navbar;