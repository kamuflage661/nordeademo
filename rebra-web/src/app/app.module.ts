import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';

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
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
