import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '../../core/layout';
import { aMenuItems } from '../../models/menu-items';
import './App.css';

function App() {
    const OfferPage = React.lazy(() => import('../../pages/offerPage'));
    const SneakersPage = React.lazy(() => import('../../pages/sneakersPage'));
    const TshirtsPage = React.lazy(() => import('../../pages/tshirtsPage'));
    const DetailsPage = React.lazy(() => import('../../pages/detailsPage'));

    const options: aMenuItems = [
        { path: '', label: 'offer', page: <OfferPage /> },
        { path: 'sneakers', label: 'sneakers', page: <SneakersPage /> },
        { path: 'tshirts', label: 'tshirts', page: <TshirtsPage /> },
        { path: 'details/:id', label: '', page: <DetailsPage /> },
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
