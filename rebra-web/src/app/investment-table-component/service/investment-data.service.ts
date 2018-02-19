import { Injectable } from '@angular/core';

import { Investment } from '../model/investment';
import { MOCK_INVESTMENTS } from '../model/mock-investments';

@Injectable()
export class InvestmentDataService {

    constructor() {}

    getMockedInvestments() : Investment[] {
        return MOCK_INVESTMENTS;
    }
}
