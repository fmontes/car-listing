/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CurrencyService } from './currency.service';

describe('Service: Currency', () => {
    let service: CurrencyService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CurrencyService]
        });
        service = new CurrencyService();
    });

    it('should get number formatted to usd', () => {
        expect(service.format(100)).toBe('$100.00');
    });
});
