import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewHomeComponent } from './view-home/view-home.component';
import { ComponentMenuComponent } from './component-menu/component-menu.component';
import { ViewTarifasComponent } from './view-tarifas/view-tarifas.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewHomeComponent,
    ComponentMenuComponent,
    ViewTarifasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
