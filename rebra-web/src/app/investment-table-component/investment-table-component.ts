import { Component, OnInit } from '@angular/core';
import { MOCK_INVESTMENTS } from './model/mock-investments';

@Component({
  selector: 'investment-table-component',
  templateUrl: './investment-table-component.html',
  styleUrls: ['./investment-table-component.css']
})
export class InvestmentTableComponentComponent implements OnInit {

  investmentList = MOCK_INVESTMENTS;

  constructor() { }

  ngOnInit() {

  }

}
