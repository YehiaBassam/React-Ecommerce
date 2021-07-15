import './ProductCardList.scss';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productActions } from '../../store/index';


const ProductCardList = (props) => {
    const dispatch = useDispatch();

    const addToCartHandler = (product) => {
        dispatch(productActions.addToCart(product));
    };


    return(

        <div className="col-lg-6">
                <div className="card-list mb-4 d-flex flex-row justify-content-around align-items-center">
                    <div className="w-20 card-list-image-div">
                        <Link to={`/products/${props.id}`}>                
                            <img className="card-list-image" src={props.image} alt="product"/>
                        </Link>
                    </div>

                    <div className="w-80 card-list-text text-center">
                        <p className="mb-1">{props.title}</p>
                        <small className="text-muted">( {props.category} )</small>
                    </div>

                    <div className="w-20 d-flex flex-column justify-content-around align-items-center h-100">
                        <div className="card-list-price">
                            <small className="text-danger fw-bolder">{props.price} $</small>
                        </div>
                        <div className="btn-group">
                            <i className="fas fa-shopping-cart fa-2x text-primary" onClick={()=>addToCartHandler(props)}></i>
                        </div>
                    </div>

                </div>
        </div>

    )
}

export default ProductCardList;