import { useSelector } from 'react-redux';
import { ProductList } from '../components/product/productList';
import { iState } from '../store/store';

export function OfferPage() {
    const products = useSelector((store: iState) => store.products);
    const template = (
        <>
            <main>
                <h2>Lista de ofertas:</h2>
                <ProductList products={products.filter((item) => item.offer)} />
            </main>
        </>
    );

    return template;
}

export default OfferPage;
