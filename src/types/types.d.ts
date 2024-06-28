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

export type Order = {
    items: Item[];
    subtotal: number;
    userId: string;
    cartId?: string
}

export type OrderResponse = {
    ok?: boolean;
    success?: boolean;
    error?: boolean;
    message: string;
    data?: string
}

export type Hello = {
    ok: boolean;
    message: string;
}