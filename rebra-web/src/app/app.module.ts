import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { InvestmentTableComponentComponent } from './investment-table-component/investment-table-component';
import { InvestmentDataService } from './investment-table-component/service/investment-data.service';

@NgModule({
  declarations: [
    AppComponent,
    InvestmentTableComponentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [InvestmentDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
