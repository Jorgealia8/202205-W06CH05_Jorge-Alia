import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from '../reducers/product.reducer';

const preloadedState = {
    products: [],
};

export const stroe = configureStore({
    reducer: {
        products: productReducer,
    },
    preloadedState,
});
