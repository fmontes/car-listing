import { TestBed, async, inject } from '@angular/core/testing';
import { HeaderService } from './header.service';
import { Title } from '@angular/platform-browser';
import { skip } from 'rxjs/operators';

import { data } from '@core/services/car-api/car-api.data';

describe('Service: Header', () => {
    let service: HeaderService;
    const titleService: Title = new Title(document);

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [HeaderService]
        });

        service = new HeaderService(titleService);
    });

    it('should set header title and doc title', () => {
        spyOn(titleService, 'setTitle');
        service.getTitle().pipe(skip(1)).subscribe((title: string) => {
            expect(title).toBe('Lexus NX 2019');
        });

        service.setTitle(data[1]);

        expect(titleService.setTitle).toHaveBeenCalledWith('Lexus NX 2019');
    });
});
