import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement, Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { ItemComponent } from './item.component';
import { Car } from '@models/api.model';
import { carItemMock, carImageMock, carPriceMock } from '@testing/mocks';
import { ImageComponent } from '../image/image.component';
import { PriceComponent } from '../price/price.component';
import { ButtonToggleComponent } from '../button-toggle/button-toggle.component';
import { CompareApiService } from '@core/services/compare-api/compare-api.service';

@Component({
    selector: 'car-host-test',
    template: '<car-item [data]="data"></car-item>'
})
class HostComponent {
    data: Car;

    setData(data: Car): void {
        this.data = data;
    }
}

describe('ItemComponent', () => {
    let hostFixture: ComponentFixture<HostComponent>;
    let hostDe: DebugElement;
    let hostComp: HostComponent;
    let compareApiService: CompareApiService;

    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ItemComponent,
                HostComponent,
                ImageComponent,
                PriceComponent,
                ButtonToggleComponent
            ],
            imports: [RouterTestingModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        hostFixture = TestBed.createComponent(HostComponent);
        hostComp = hostFixture.componentInstance;
        hostDe = hostFixture.debugElement;

        compareApiService = hostDe.injector.get(CompareApiService);
        spyOn(compareApiService, 'add');
        spyOn(compareApiService, 'remove');

        de = hostDe.query(By.css('car-item'));
        hostComp.setData(carItemMock);
        hostFixture.detectChanges();
    });

    it('should have image', () => {
        const image: ImageComponent = de.query(By.css('car-image'))
            .componentInstance;
        expect(image.data).toEqual(carImageMock);
    });

    it('should have price', () => {
        const price: PriceComponent = de.query(By.css('car-price'))
            .componentInstance;
        expect(price.final).toEqual(carPriceMock.final);
    });

    it('should have car info', () => {
        const brand: DebugElement = de.query(By.css('.item__brand'));
        const title: DebugElement = de.query(By.css('.item__title'));
        const info: DebugElement = de.query(By.css('.item__info'));

        expect(info).toBeTruthy();
        expect(brand.nativeElement.textContent).toEqual('BMW');
        expect(title.nativeElement.textContent).toEqual('X6 2017');
    });

    describe('Actions', () => {
        it('should have car actions', () => {
            const add: DebugElement = de.query(By.css('car-button-toggle'));
            const view: DebugElement = de.query(By.css('.item__view'));

            expect(add).toBeTruthy();
            expect(add.componentInstance.label).toBe('Add');
            expect(view).toBeTruthy();
            expect(view.nativeElement.textContent).toBe('View');
            expect(view.properties.href).toBe('/bmw-x6-2017');
        });

        it('should add/remove car to compare', () => {
            const add: DebugElement = de.query(By.css('car-button-toggle'));

            add.triggerEventHandler('change', true);
            expect(compareApiService.add).toHaveBeenCalledTimes(1);

            add.triggerEventHandler('change', false);
            expect(compareApiService.remove).toHaveBeenCalledTimes(1);
        });
    });
});
