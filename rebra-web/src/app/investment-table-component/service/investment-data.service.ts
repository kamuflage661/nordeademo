import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Investment } from '../model/investment';
import { MOCK_INVESTMENTS } from '../model/mock-investments';

@Injectable()
export class InvestmentDataService {

    constructor() {}

    getMockedInvestments() : Investment[] {
        return MOCK_INVESTMENTS;
    }

    getMockedInvestmentsObservable() : Observable<Investment[]> {
        return of(MOCK_INVESTMENTS);
    }
}
