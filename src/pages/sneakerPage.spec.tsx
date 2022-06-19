import { useSelector } from 'react-redux';
import { iProduct } from '../models/product';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '../utils/testutils';

import { iState, store } from '../store/store';
import SneakerPage from './sneakersPage';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
}));

const mockedProducts: Array<iProduct> = [
    {
        id: '24',
        name: 'nike zoom',
        price: 40,
        brand: 'nike',
        description: 'nike zoom for running',
        category: 'sneakers',
        offer: true,
        stock: 30,
    },
    {
        id: '4',
        name: 'addidas predator',
        price: 60,
        brand: 'addidas',
        description: 'addidas predator for running',
        category: 'sneakers',
        offer: false,
        stock: 2,
    },
];

describe('Given the component OfferPage', () => {
    describe('When calling it', () => {
        beforeEach(() => {
            (useSelector as jest.Mock).mockImplementation(() => mockedProducts);
        });
        test('Then it should render', () => {
            const preloadedState: iState = {
                products: [] as Array<iProduct>,
            };
            render(
                <BrowserRouter>
                    <SneakerPage></SneakerPage>
                </BrowserRouter>,
                { preloadedState, store }
            );
            const newResult = screen.getByText(/SNEAKERS/i);
            expect(newResult).toBeInTheDocument();
        });
    });
});
