 export interface Products {
    name: string;
    price: number;
}
export default interface InventoryItem {
    product: Products;
    quantity: number;
}