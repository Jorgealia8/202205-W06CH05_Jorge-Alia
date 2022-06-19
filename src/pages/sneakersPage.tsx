import { useSelector } from 'react-redux';
import { ProductList } from '../components/product/productList';
import { iState, store } from '../store/store';

export function SneakerPage() {
    const products = useSelector((store: iState) => store.products);
    const template = (
        <>
            <main>
                <h2>SNEAKERS:</h2>
                <ProductList
                    products={products.filter(
                        (item) => item.category === 'sneakers'
                    )}
                />
            </main>
        </>
    );

    return template;
}

export default SneakerPage;
