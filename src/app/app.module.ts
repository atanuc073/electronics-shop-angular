import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VieworderbycustidComponent } from './vieworderbycustid/vieworderbycustid.component';
import { FormsModule } from '@angular/forms';
import { CreateorderComponent } from './createorder/createorder.component';
import { ViewbasketitemsbyidComponent } from './viewbasketitemsbyid/viewbasketitemsbyid.component';
import { EventEmitterService } from './event-emitter.service';
import { CancelorderComponent } from './cancelorder/cancelorder.component';

@NgModule({
  declarations: [
    AppComponent,
    VieworderbycustidComponent,
    CreateorderComponent,
    ViewbasketitemsbyidComponent,
    CancelorderComponent
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
