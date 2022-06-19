import { iProduct } from '../../models/product';

export function Product({ product }: { product: iProduct }) {
    return (
        <>
            <h3>{product.name}</h3>
            <p>{product.brand}</p>
            <p>Price: {product.price} €</p>
        </>
    );
}
