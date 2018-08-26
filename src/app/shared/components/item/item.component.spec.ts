import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement, Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ItemComponent } from './item.component';
import { Car } from '@models/api.model';
import { carItemMock, carImageMock, carPriceMock } from '@testing/mocks';
import { ImageComponent } from '../image/image.component';
import { PriceComponent } from '../price/price.component';

@Component({
    selector: 'car-host-test',
    template: '<car-item [data]="data"></car-item>',
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

    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ItemComponent, HostComponent, ImageComponent, PriceComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        hostFixture = TestBed.createComponent(HostComponent);
        hostComp = hostFixture.componentInstance;
        hostDe = hostFixture.debugElement;
        de = hostDe.query(By.css('car-item'));
        hostComp.setData(carItemMock);
        hostFixture.detectChanges();
    });

    it('should have image', () => {
        const image: ImageComponent = de.query(By.css('car-image')).componentInstance;
        expect(image.data).toEqual(carImageMock);
    });

    it('should have price', () => {
        const price: PriceComponent = de.query(By.css('car-price')).componentInstance;
        expect(price.data).toEqual(carPriceMock);
    });

    it('should have name and year', () => {
        const name: DebugElement = de.query(By.css('h3'));
        const year: DebugElement = de.query(By.css('h5'));
        const header: DebugElement = de.query(By.css('header'));

        expect(header).toBeTruthy();
        expect(name.nativeElement.textContent).toEqual('BMW X6');
        expect(year.nativeElement.textContent).toEqual('2017');
    });
});
