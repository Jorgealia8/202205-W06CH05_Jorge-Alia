import { iProduct } from '../models/product';
import * as action from './action.creators';
import { productReducer } from './product.reducer';
import { AnyAction } from '@reduxjs/toolkit';

describe('Given productReducer', () => {
    const mockProduct: iProduct = {
        id: '23',
        name: 'bota',
        price: 30,
        brand: 'brandmock',
        description: 'high mountain boot',
        category: 'sneakers',
        offer: true,
        stock: 21,
    };
    describe('When calling it whit action load with an array of Product s', () => {
        test('Then it should return a new state witch the Products in the action payload', () => {
            //Arrange
            const initialSate: Array<iProduct> = [];
            const actionToTest = action.loadProductsAction([mockProduct]);
            //Act
            const newState = productReducer(initialSate, actionToTest);
            //Assert
            expect(newState).toHaveLength(1);
            expect(newState).toStrictEqual([mockProduct]);
        });
    });
    describe('When calling it with action add product whit the new product as payload', () => {
        test('Receive a new state with the old state and the new product', () => {
            //Arrange
            const initialState: Array<iProduct> = [mockProduct];
            const newProduct = { ...mockProduct, id: '34' };
            const acctionToTest = action.addProductAction(newProduct);
            //Act
            const newState = productReducer(initialState, acctionToTest);
            //Assert
            expect(newState).toHaveLength(2);
            expect(newState).toStrictEqual([mockProduct, newProduct]);
        });
    });

    describe('When calling it with action update with the update Product as payload', () => {
        test('Then it should return a new state witch the products update', () => {
            //Arrange
            const initialState: Array<iProduct> = [mockProduct];
            const updatedProduct = { ...mockProduct, name: 'slipper' };
            const actionToTest = action.updateProductAction(updatedProduct);
            //Act
            const newState = productReducer(initialState, actionToTest);
            //Assert
            expect(newState).toHaveLength(1);
            expect(newState).toStrictEqual([updatedProduct]);
        });
    });
    describe('When calling it with action delete for one product', () => {
        test('Then it should return a new state without this product', () => {});
    });
    //Arrange
    const initialState: Array<iProduct> = [mockProduct];
    const actionToTest = action.deleteProductAction(mockProduct);
    //Act
    const newState = productReducer(initialState, actionToTest);
    //Assert
    expect(newState).toHaveLength(0);

    describe('When calling it with none of the above', () => {
        test('The', () => {
            const initialState: Array<iProduct> = [mockProduct];
            const newState = productReducer(initialState, {} as AnyAction);

            expect(newState).toStrictEqual(initialState);
        });
    });

    //pasamos un initial state y un objeto vacio
});
