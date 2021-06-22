import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {
  invokeOrderproductFunction=new EventEmitter

  constructor() { }
  onOrderproductButtonclick(){
    this.invokeOrderproductFunction.emit();
  }

}
