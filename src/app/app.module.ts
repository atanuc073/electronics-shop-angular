import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { CreateorderComponent } from './createorder/createorder.component';
import { VieworderbycustidComponent } from './vieworderbycustid/vieworderbycustid.component';
import { EventEmitterService } from './event-emitter.service';
import { CancelorderComponent } from './cancelorder/cancelorder.component';

import { ViewitemsbycustComponent } from './viewitemsbycust/viewitemsbycust.component';

@NgModule({
  declarations: [
    AppComponent,
    VieworderbycustidComponent,
    CreateorderComponent,
    CancelorderComponent,
    ViewitemsbycustComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    EventEmitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
