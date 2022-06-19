import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '../../core/layout';
import { aMenuItems } from '../../models/menu-items';
import { loadProductsAction } from '../../reducers/action.creators';
import { HttStoreProducts } from '../../services/store.products';
import './App.css';

function App() {
    const dispatch = useDispatch();
    const products = useMemo(() => new HttStoreProducts(), []);

    useEffect(() => {
        products
            .getProducts()
            .then((products) => dispatch(loadProductsAction(products)));
    }, [products, dispatch]);

    const OfferPage = React.lazy(() => import('../../pages/offerPage'));
    const SneakersPage = React.lazy(() => import('../../pages/sneakersPage'));
    const TshirtsPage = React.lazy(() => import('../../pages/tshirtsPage'));

    const options: aMenuItems = [
        { path: '', label: 'Offer', page: <OfferPage /> },
        { path: 'Sneakers', label: 'Sneakers', page: <SneakersPage /> },
        { path: 'T-shirts', label: 'T-shirts', page: <TshirtsPage /> },
    ];

    return (
        <Router>
            <Layout options={options}>
                <React.Suspense>
                    <React.StrictMode>
                        <Routes>
                            {options.map((item) => (
                                <Route
                                    key={item.label}
                                    path={item.path}
                                    element={item.page}
                                ></Route>
                            ))}
                        </Routes>
                    </React.StrictMode>
                </React.Suspense>
            </Layout>
        </Router>
    );
}

export default App;
