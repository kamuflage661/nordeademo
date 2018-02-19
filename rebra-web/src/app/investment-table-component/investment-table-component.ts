import { Component, OnInit} from '@angular/core';

import { Investment } from './model/investment';
import { InvestmentDataService } from './service/investment-data.service';

@Component({
  selector: 'investment-table-component',
  templateUrl: './investment-table-component.html',
  styleUrls: ['./investment-table-component.css']
})
export class InvestmentTableComponentComponent implements OnInit {

  constructor(private investmentDataService : InvestmentDataService ) { }

  ngOnInit() {

  }

}
