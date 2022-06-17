import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from '../reducers/product.reducer';

const preloadedState = {
    products: [],
};

export const store = configureStore({
    reducer: {
        products: productReducer,
    },
    preloadedState,
});
