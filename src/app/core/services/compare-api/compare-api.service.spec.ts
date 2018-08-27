/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CompareApiService } from './compare-api.service';

describe('Service: CompareApi', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CompareApiService]
        });
    });

    it('should ...', inject(
        [CompareApiService],
        (service: CompareApiService) => {
            expect(service).toBeTruthy();
        }
    ));
});
