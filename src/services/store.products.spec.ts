import { HttStoreProducts } from './store.products';

describe('Given HttpStoreProduct', () => {
    describe('When we instantiate', () => {
        describe('And we use method getProducts', () => {
            test('Then it should return a array of two character', async () => {
                // arrange
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue([
                        {
                            id: '23',
                            name: 'bota',
                            price: 30,
                            brand: 'brandmock',
                            description: 'high mountain boot',
                            category: 'sneakers',
                            offer: true,
                            stock: 21,
                        },
                        {
                            id: '431',
                            name: 'funny t-shirt',
                            price: 80,
                            brand: 'brandmock',
                            description: 't-shirt I love React',
                            category: 'tsrit',
                            offer: false,
                            stock: 2,
                        },
                    ]),
                });
                // act
                const result = await new HttStoreProducts().getProducts();
                // assert
                expect(fetch).toBeCalled();
                expect(result.length).toBe(2);
            });
        });
        describe('And we use method getProduct', () => {
            test('Then it should return a product', async () => {
                // arrange
                const productid = '1';
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue({
                        name: 'camiseta',
                        id: productid,
                    }),
                });
                //act
                const result = await new HttStoreProducts().getProduct();
                // assert
                expect(fetch).toBeCalled();
                expect(result.id).toBe('1');
            });
        });
        describe('And we use method setProduct', () => {
            test('Then it should return the added product', async () => {
                // arrange
                const mockProduct = {
                    id: '23',
                    name: 'bota',
                    price: 30,
                    brand: 'tshirts',
                    description: 'high mountain boot',
                    category: 'sneakers',
                    offer: true,
                    stock: 21,
                };
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue({
                        id: '23',
                        name: 'bota',
                        price: 30,
                        brand: 'brandmock',
                        description: 'high mountain boot',
                        category: 'tshirts',
                        offer: true,
                        stock: 21,
                    }),
                });
                // act
                const result = await new HttStoreProducts().setProducts(
                    mockProduct
                );
                //assert
                expect(fetch).toBeCalled();
                expect(result.id).toBe('23');
            });
        });
        describe('Add we use method updateProduct', () => {
            test('Then it should return the updated character', async () => {
                //arrange
                const mockProduct = {
                    id: '23',
                    name: 'bota',
                    price: 30,
                    brand: 'tshirts',
                    description: 'high mountain boot',
                    category: 'sneakers',
                    offer: true,
                    stock: 21,
                };
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue({
                        id: '23',
                        name: 'bota',
                        price: 30,
                        brand: 'tshirts',
                        description: 'high mountain boot',
                        category: 'sneakers',
                        offer: true,
                        stock: 21,
                    }),
                });
                // act
                const result = await new HttStoreProducts().updateProduct(
                    mockProduct
                );
                expect(fetch).toBeCalled();
                expect(result.id).toBe('23');
            });
        });

        describe('And we use method deleteProduct', () => {
            test('Then it should return a status ok', async () => {
                // Arrange
                const deleteId = '1';
                global.fetch = jest.fn().mockResolvedValue({
                    status: 200,
                });
                // act
                const result = await new HttStoreProducts().deleteProduct(
                    deleteId
                );
                expect(fetch).toBeCalled();
                expect(result).toBe(200);
            });
        });
    });
});
