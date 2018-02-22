import { Component, OnInit} from '@angular/core';

import { Investment } from './model/investment';
import { InvestmentDataService } from './service/investment-data.service';

@Component({
  selector: 'investment-table-component',
  templateUrl: './investment-table-component.html',
  styleUrls: ['./investment-table-component.css'],
  providers: [InvestmentDataService],
})
export class InvestmentTableComponentComponent implements OnInit {

  displayedColumns = ['name','quantity', 'buyPrice', 'actualPrice', 'income', 'percentage'];

  constructor(private investmentDataService : InvestmentDataService ) {}

  investmentData : Investment[];

  getMockedInvestmentData(): void {
    this.investmentDataService.getMockedInvestmentsObservable().subscribe(investmentData => this.investmentData = investmentData);
  }

  getInvestmentData(): void {
    this.investmentDataService.getInvestments().subscribe(investmentData => this.investmentData = investmentData);
  }

  ngOnInit() {
    this.getInvestmentData();
  }

}
