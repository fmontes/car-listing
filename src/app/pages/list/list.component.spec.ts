import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared.module';
import { ItemComponent } from '../../shared/components/item/item.component';
import { data } from '@services/car-api/car-api.data';

describe('ListComponent', () => {
    let component: ListComponent;
    let fixture: ComponentFixture<ListComponent>;
    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListComponent],
            imports: [SharedModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        fixture.detectChanges();
    });

    it('should create a list of cars', () => {
        const items: ItemComponent[] = de.queryAll(By.css('car-item')).map(item => item.componentInstance);

        expect(items.length).toEqual(3);
        items.forEach((item, i) => {
            expect(item.data).toEqual(data[i]);
        });
    });
});
