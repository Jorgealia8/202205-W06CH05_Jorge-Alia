export interface iProduct {
    id: string;
    name: string;
    price: number;
    brand: string;
    description: string;
    category: 'sneakers' | 'clothing';
    offer: boolean;
    stock: number;
}
