import './ProductDetails.scss';
import { withRouter } from "react-router";
import { Component } from 'react';
import axios from '../../api/axios-firebase';
import Spinner from '../../components/Spinner/Spinner';


class ProductDetails extends Component{

    state = {
        currentProduct  : {}
    }

    
    componentDidMount(){        
        const productId = this.props.match.params.id;
        axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then( res => this.setState({currentProduct: res.data}));
    }

    render(){
        const {currentProduct} = this.state
        return(
            <div className="product-details-wrapper">
                {  Object.keys(currentProduct).length !== 0 ?  
                (<div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mx-auto" style={{maxWidth:300}}>
                                <img src={currentProduct.image} className="img-fluid" alt="product"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-center h-100 d-flex flex-column justify-content-center align-items-center mt-5 mt-md-0">
                                <h1 className="text-primary">{currentProduct.title}</h1>
                                <h5 className="text-muted">( {currentProduct.category} )</h5>
                                <p>{currentProduct.description}</p>
                            </div> 
                        </div>
                    </div>
                </div>)
                : <Spinner/>}
            </div>
        )
    }

}

export default withRouter(ProductDetails);