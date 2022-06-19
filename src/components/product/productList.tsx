import { useSelector } from 'react-redux';
import { iProduct } from '../../models/product';
import { iState } from '../../store/store';
import { Product } from './product';

export function ProductList({ products }: { products: Array<iProduct> }) {
    const template = (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    <Product product={product} />
                </li>
            ))}
        </ul>
    );

    return template;
}
