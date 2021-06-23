import { Component, OnInit } from '@angular/core';
import { Basket } from '../basket';
import { BasketService } from '../basket.service';
import { OrderproductService } from '../orderproduct.service';

@Component({
  selector: 'app-viewbasketitemsbyid',
  templateUrl: './viewbasketitemsbyid.component.html',
  styleUrls: ['./viewbasketitemsbyid.component.css']
})
export class ViewbasketitemsbyidComponent implements OnInit {
  custid:number;
  baskets:Basket[]=undefined;
  msg:string;
  totalcost:number=0;
  creatorderId:number;
  createOrderMsg:string;


  constructor(private basketservice:BasketService,private orderproductservice:OrderproductService) { }

  ngOnInit() {
  }
  viewBasketItemsById():void{
    if(this.custid==null || this.custid==undefined || this.custid<=0){
      this.msg="Enter Proper Customer Id"

    }
    this.basketservice.viewAllCartItems(this.custid).subscribe(data=>{
      console.log(data);
      
      this.baskets=data;
      this.msg=undefined;
      this.getTotalCost();
    },
    error=>{
      console.log(error);
      this.reset();
      this.msg=error.error.message;})

  }
  getTotalCost():void{
    this.totalcost=0;
    this.baskets.forEach(element => {
      this.totalcost=element.productDetails.price+this.totalcost; 
    });
  }

  reset():void{
    this.totalcost=0;
    this.msg=undefined;
    this.baskets=undefined;
    this.custid=undefined;
    this.creatorderId=undefined;
    this.createOrderMsg=undefined;
  }

}
