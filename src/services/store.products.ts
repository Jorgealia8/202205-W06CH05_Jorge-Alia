import { iProduct } from '../models/product';

export class HttStoreProducts {
    url: string;
    constructor() {
        this.url = 'http://localhost:3500/products';
    }
    getProducts() {
        //GET
        return fetch(this.url).then((resp) => {
            return resp.json();
        });
    }
    getProduct() {
        //GET
        return fetch(this.url).then((resp) => resp.json());
    }
    setProducts(product: iProduct): Promise<iProduct> {
        //POST
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }
    updateProduct(product: iProduct): Promise<Partial<iProduct>> {
        // PUT / PATCH
        return fetch(this.url + `/${product.id}`, {
            method: 'PATCH',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }
    deleteProduct(id: string): Promise<number> {
        // DELETE
        return fetch(this.url + `/${id}`, {
            method: 'DELETE',
        }).then((response) => response.status);
    }
}
