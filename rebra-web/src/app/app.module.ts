import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { InvestmentTableComponentComponent } from './investment-table-component/investment-table-component';

@NgModule({
  declarations: [
    AppComponent,
    InvestmentTableComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
