import { useSelector } from 'react-redux';
import { ProductList } from '../components/product/productList';
import { iState, store } from '../store/store';

export function TshirtsPage() {
    const products = useSelector((store: iState) => store.products);
    const template = (
        <>
            <main>
                <h2>T-SHIRTS:</h2>
                <ProductList
                    products={products.filter(
                        (item) => item.category === 'tshirts'
                    )}
                />
            </main>
        </>
    );

    return template;
}

export default TshirtsPage;
