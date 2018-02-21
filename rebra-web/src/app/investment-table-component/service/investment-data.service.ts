import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Investment } from '../model/investment';
import { MOCK_INVESTMENTS } from '../model/mock-investments';

@Injectable()
export class InvestmentDataService {

    constructor(private http: HttpClient) {}

    getInvestments() : Observable<Investment[]> {
      return this.http.get<Investment[]>('http://localhost:8080/investmenttable');
    }

    getMockedInvestments() : Investment[] {
      return MOCK_INVESTMENTS;
    }

    getMockedInvestmentsObservable() : Observable<Investment[]> {
      return of(MOCK_INVESTMENTS);
    }


}
