import { createAction } from '@reduxjs/toolkit';
import { iProduct } from '../models/product';
import { actionTypes } from './action.types';

export const loadProductsAction = createAction<Array<iProduct>>(
    actionTypes['products@load']
);

export const addProductAction = createAction<iProduct>(
    actionTypes['products@add']
);

export const updateProductAction = createAction<iProduct>(
    actionTypes['products@update']
);

export const deleteProductAction = createAction<iProduct>(
    actionTypes['products@delete']
);
