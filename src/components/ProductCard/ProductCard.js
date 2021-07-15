import './ProductCard.scss';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productActions } from '../../store/index';


const ProductCard = (props) => {
    const dispatch = useDispatch();

    const addToCartHandler = (product) => {
        dispatch(productActions.addToCart(product));
    };


    return(

        <div className="col-md-4">
            <div className="card mb-4">
                <Link to={`/products/${props.id}`}>                
                    <div className="card-image-div">
                        <img className="card-image" src={props.image} alt="product"/>
                    </div>
                </Link>

                <div className="card-body d-flex flex-column justify-content-center">
                    <div className="text-center">
                        <p className="card-text mb-1">{props.title}</p>
                        <small className="text-muted">( {props.category} )</small>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-5">
                        <div className="btn-group">
                            <i className="fas fa-shopping-cart fa-2x text-primary" onClick={()=>addToCartHandler(props)}></i>
                        </div>
                        <div className="card-price">
                            <small className="text-danger fw-bolder">{props.price} $</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductCard;