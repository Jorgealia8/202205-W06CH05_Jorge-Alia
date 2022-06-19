// test-utils.jsx
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { productReducer } from '../reducers/product.reducer';
// Import your own reducer

function render(
    ui: JSX.Element,
    {
        preloadedState,
        store = configureStore({
            reducer: {
                products: productReducer,
            },
            preloadedState,
        }),
        ...renderOptions
    }: { preloadedState?: any; store?: any } = {}
) {
    function Wrapper({ children }: { children: JSX.Element }) {
        return <Provider store={store}>{children}</Provider>;
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };