import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceComponent } from './price.component';
import { DebugElement, Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CarPrice } from '@models/api.model';

@Component({
    selector: 'car-host-test',
    template: '<car-price [data]="data"></car-price>',
})
class HostComponent {
    data: CarPrice;

    setData(data: CarPrice): void {
        this.data = data;
    }
}

describe('PriceComponent', () => {
    let hostFixture: ComponentFixture<HostComponent>;
    let hostDe: DebugElement;
    let hostComp: HostComponent;

    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PriceComponent, HostComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        hostFixture = TestBed.createComponent(HostComponent);
        hostComp = hostFixture.componentInstance;
        hostDe = hostFixture.debugElement;
        de = hostDe.query(By.css('car-price'));
    });

    it('should have sale and final price', () => {
        hostComp.setData({
            original: 1000,
            final: 990
        });
        hostFixture.detectChanges();
        const final: DebugElement = de.query(By.css('h4'));
        const original: DebugElement = de.query(By.css('span'));
        expect(final.nativeElement.textContent).toEqual('$990.00');
        expect(original.nativeElement.textContent).toEqual('$1,000.00');
    });

    it('should have ONLY final price', () => {
        hostComp.setData({
            final: 9999
        });
        hostFixture.detectChanges();
        const final: DebugElement = de.query(By.css('h4'));
        const original: DebugElement = de.query(By.css('span'));
        expect(final.nativeElement.textContent).toEqual('$9,999.00');
        expect(original).toBeFalsy();
    });
});
