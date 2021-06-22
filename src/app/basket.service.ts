import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(public http:HttpClient) { }
  viewAllCartItems(custid:number):Observable<any>{
    return this.http.get("http://localhost:8082/elecapp/viewitems/"+custid)
  }

}
