import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CancelorderComponent } from './cancelorder/cancelorder.component';
import { CreateorderComponent } from './createorder/createorder.component';
import { ViewbasketitemsbyidComponent } from './viewbasketitemsbyid/viewbasketitemsbyid.component';
import { VieworderbycustidComponent } from './vieworderbycustid/vieworderbycustid.component';

const routes: Routes = [{path:"vieworders",
                          children:[{path:'bycustid',component:VieworderbycustidComponent}]},
                        {path:"viewcartitems",
                        children:[{path:'bycustid',component:ViewbasketitemsbyidComponent}]},
                        {path:'viewcartitems/bycustid/createorder/:custid',component:CreateorderComponent},
                        {path:"vieworders/bycustid/removeorder/:orderid",component:CancelorderComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
