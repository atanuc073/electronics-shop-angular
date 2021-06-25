import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CancelorderComponent } from './cancelorder/cancelorder.component';
import { CreateorderComponent } from './createorder/createorder.component';
import { ViewitemsbycustComponent } from './viewitemsbycust/viewitemsbycust.component';
import { VieworderbycustidComponent } from './vieworderbycustid/vieworderbycustid.component';


const routes: Routes = [{path:"vieworders",
                          children:[{path:'bycustid',component:VieworderbycustidComponent}]},
                        {path:"getitemsbycustid", component:ViewitemsbycustComponent},
                        {path:'getitemsbycustid/createorder/:custid',component:CreateorderComponent},
                        {path:"vieworders/bycustid/removeorder/:orderid",component:CancelorderComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
