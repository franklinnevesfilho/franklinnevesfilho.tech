import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MakingOfComponent } from './making-of/making-of.component';
import { NgbDropdown} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    MakingOfComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule

  ],
  exports:[
    routingComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
