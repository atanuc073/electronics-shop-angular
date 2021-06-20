import { Customer } from "./customer";

export class Orderproducts {
    orderId:string;
    orderDate:string;
    customer:Customer=new Customer();
    totalCost:number;
    orderStatus:string;
}
