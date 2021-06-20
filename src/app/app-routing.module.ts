import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VieworderbycustidComponent } from './vieworderbycustid/vieworderbycustid.component';

const routes: Routes = [{path:"vieworders",
                          children:[{path:'bycustid',component:VieworderbycustidComponent}]},
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
