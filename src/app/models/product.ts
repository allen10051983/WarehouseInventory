
import { ICategory } from './category';
export interface IProduct{
    id: number;
    name: string;
    description: string;
    category: ICategory;
   quantity:number;   
}