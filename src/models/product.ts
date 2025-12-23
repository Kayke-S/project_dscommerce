import type { CategoryDTO } from "./category";

// DTO - DATA TRANSFER OBJECT
export type ProductDTO = {
    id: number;
    name: string;
    description: string;
    price: number;
    imgUrl: string;
    categories: CategoryDTO[];
}