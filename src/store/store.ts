import { configureStore } from '@reduxjs/toolkit';
import { iProduct } from '../models/product';
import { productReducer } from '../reducers/product.reducer';

export interface iState {
    products: Array<iProduct>;
}

const preloadedState = {
    products: [],
};

export const store = configureStore({
    reducer: {
        products: productReducer,
    },
    preloadedState,
});
