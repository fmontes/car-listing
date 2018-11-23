import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DetailComponent } from './detail.component';
import { HeaderService } from '@core/header/services/header.service';
import { ImageComponent } from '@shared/components/image/image.component';
import { PriceComponent } from '@shared/components/price/price.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@shared/shared.module';
import { carImageMock, carPriceMock } from '@testing/mocks';
import { data } from '@services/car-api/car-api.data';

class ActivatedRouteMock {
    get snapshot() {
        return {
            data: {
                car: data[0]
            }
        };
    }
}

describe('DetailComponent', () => {
    let component: DetailComponent;
    let fixture: ComponentFixture<DetailComponent>;
    let de: DebugElement;
    let headerService: HeaderService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DetailComponent],
            providers: [
                {
                    provide: ActivatedRoute,
                    useClass: ActivatedRouteMock
                }
            ],
            imports: [RouterTestingModule, SharedModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DetailComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        headerService = de.injector.get(HeaderService);
        spyOn(headerService, 'setTitle');
        fixture.detectChanges();
    });

    it('should set the title', () => {
        expect(headerService.setTitle).toHaveBeenCalledTimes(1);
    });

    it('should have image', () => {
        const image: ImageComponent = de.query(By.css('car-image'))
            .componentInstance;
        expect(image.data).toEqual(carImageMock);
    });

    it('should have price', () => {
        const price: PriceComponent = de.query(By.css('car-price'))
            .componentInstance;
        expect(price.original).toEqual(carPriceMock.original);
        expect(price.final).toEqual(carPriceMock.final);
    });

    it('should have teaser', () => {
        const quote: DebugElement = de.query(By.css('.detail__teaser'));
        expect(quote.nativeElement.textContent).toBe(data[0].teaser);
    });

    it('should have description', () => {
        const description: DebugElement = de.query(By.css('.detail__description'));
        expect(description.nativeElement.innerHTML).toBe(data[0].description);
    });
});
