export type Product = {
    productId: number,
    code: string,
    name: string,
    description: string,
    stocks: number,
    price: number,
    unitPrice: number,
    status: string,
    categories: string,
    image: string
}

export type Item = {
    productId: string;
    quantity: number;
    price: number;
}

export type Hello = {
    ok: boolean;
    message: string;
}