import './Products.scss';
import { useState , useEffect , Fragment } from 'react';
import axios from '../../api/axios-firebase';
import Spinner from '../../components/Spinner/Spinner';
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductCardList from '../../components/ProductCardList/ProductCardList';


const Products = () => {

    const [products, setProducts] = useState([]);
    const [searchTerm, setsearchTerm] = useState('');
    const [listGridView, setlistGridView] = useState('grid');
    
    useEffect(() => {
        axios.get('/products.json')
        .then(res => setProducts(res.data))
        .catch(err => console.log(err));
    }, []);

    if( listGridView === "grid"){
        var productsCards = 
        //search part
        products.filter(product => {
            if (searchTerm === ''){
                return product
            }
            else if (product.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return product
            }
        })
        //render filtered part part
        .map( (product,index) =>
            <Fragment key={product.id}>
                <ProductCard id={product.id} image={product.image} title={product.title} category={product.category}  price={product.price} />
            </Fragment>
            )
        }

        else{
            var productsCards = 
            //search part
            products.filter(product => {
                if (searchTerm === ''){
                    return product
                }
                else if (product.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return product
                }
            })
            //render filtered part part
            .map( (product,index) =>
                <Fragment key={product.id}>
                    <ProductCardList id={product.id} image={product.image} title={product.title} category={product.category}  price={product.price} />
                </Fragment>
                )
        }
        
        // show spinner until get products 
        var allProducts =  Object.keys(products).length !== 0 ?  
        productsCards
        : <div className="mt-5"> <Spinner/> </div>;


        return(
            <div>
            
                <div className="loader"></div>

                <main id="main" role="main">
                    <div className="album py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-auto py-3" id="collection-heading">
                                    <div className="search-box">
                                        <div>
                                            <button className="btn btn-success  ms-3 float-start"   onClick={()=>setlistGridView('list')}><i className="fas fa-list"></i></button>
                                            <button className="btn btn-primary ms-3 float-end"  onClick={()=>setlistGridView('grid')}><i className="fas fa-th"></i></button>
                                        </div>
                                        <div className="d-flex w-50">
                                            <input type="text" 
                                            className="form-control"
                                            placeholder="Search..."
                                            onChange={e => setsearchTerm(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
            
                            <div className="row">

                            { allProducts.length  !== 0 ? allProducts : <center><h1 className="text-muted">no product found</h1></center> }
                            
                            </div>
                        </div>
                    </div>
                </main>
    
            </div>
        )
}
export default Products;