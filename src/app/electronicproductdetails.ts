import { Category } from "./category";
import { Electronicproductspecs } from "./electronicproductspecs";

export class Electronicproductdetails {
    productID:number;
    code:string;
    name:string;
    price:number;
    image:string;
    createdate:string;
    category:Category;
    elecProdSpecs:Electronicproductspecs[]=undefined;
    stock:number;
}
