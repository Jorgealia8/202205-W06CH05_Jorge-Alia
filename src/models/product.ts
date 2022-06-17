export interface iProduct {
    id: string;
    name: string;
    price: number;
    brand: string;
    description: string;
    category: 'sneakers' | 'tshirts';
    offer: boolean;
    stock: number;
}
