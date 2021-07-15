import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { products : [] , totalQuantity: 0 ,  totalProductsPrice: 0 };

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

        addToCart(state , action) {
            
            const newProduct = action.payload;

            const existingProduct = state.products.find((product) => product.id === newProduct.id);
            state.totalQuantity++;
            state.totalProductsPrice = state.totalProductsPrice + newProduct.price;

            if (!existingProduct) {
                state.products.push({
                    quantity: 1,
                    id: newProduct.id,
                    price: newProduct.price,
                    totalPrice: newProduct.price,
                    title: newProduct.title,
                    image:newProduct.image,
                });
            } else {
                existingProduct.quantity ++;
                existingProduct.totalPrice = existingProduct.totalPrice + newProduct.price;
            };
        },



        decreaseQuantity(state , action) {
            
            // const productDecreased = action.payload;
            // console.log(productDecreased);
            // const existingProduct  = state.products.find((product) => product.id === productDecreased.id);
            // state.totalQuantity--;
            // productDecreased.quantity = productDecreased.quantity - 1;


            const productDecreased = action.payload;
            const existingProduct = state.products.find(product => product.id === productDecreased.id);
            state.totalQuantity--;
            state.totalProductsPrice = state.totalProductsPrice - productDecreased.price;


            if (existingProduct.quantity === 1) {
                state.products = state.products.filter(product => product.id !== existingProduct.id);
            } else {
                existingProduct.quantity--;
                existingProduct.totalPrice = existingProduct.totalPrice - productDecreased.price;
            }

            // if (!existingProduct) {
            //     state.products.push({
            //         quantity: 1,
            //         id: productDecreased.id,
            //         price: productDecreased.price,
            //         totalPrice: productDecreased.price,
            //         title: productDecreased.title,
            //         image:productDecreased.image,
            //     });
            // } else {
            //     productDecreased.quantity --;
            //     // productDecreased.totalPrice = productDecreased.totalPrice + productDecreased.price;
            // };
        },

        removeFromCart(state , action) {
            const removedProduct = action.payload;
            state.products = state.products.filter((product) => product.id !== removedProduct.id);
            state.totalQuantity = state.totalQuantity - removedProduct.quantity;
            state.totalProductsPrice = state.totalProductsPrice - removedProduct.totalPrice;
        },

        emptyCart(state){
            state.products = [];
            state.totalQuantity = 0;
            state.totalProductsPrice = 0;
        },

        // gridView(){
        //     let view = "grid"
        //     return view;
        // },

        // listView(){
        //     let view = "list"
        //     return view;
        // },

    }

});

const store = configureStore({
reducer: productsSlice.reducer,
});

export const productActions = productsSlice.actions;

export default store;