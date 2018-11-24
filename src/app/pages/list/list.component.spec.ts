import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { data } from '@services/car-api/car-api.data';
import { SharedModule } from '@shared/shared.module';
import { ListComponent } from './list.component';
import { ItemComponent } from '@shared/components/item/item.component';
import { HeaderService } from '@core/header/services/header.service';
import { CompareBarModule } from '@core/compare-bar/compare-bar.module';
import { CompareApiService } from '@core/services/compare-api/compare-api.service';

describe('ListComponent', () => {
    let component: ListComponent;
    let fixture: ComponentFixture<ListComponent>;
    let de: DebugElement;
    let headerService: HeaderService;
    let compareApiService: CompareApiService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListComponent],
            imports: [
                SharedModule,
                RouterTestingModule,
                BrowserAnimationsModule,
                CompareBarModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        headerService = de.injector.get(HeaderService);
        spyOn(headerService, 'setTitle');
        fixture.detectChanges();
    });

    it('should create a list of cars', () => {
        const items: ItemComponent[] = de
            .queryAll(By.css('car-item'))
            .map((item) => item.componentInstance);

        expect(items.length).toEqual(6);
        items.forEach((item, i) => {
            expect(item.data).toEqual(data[i]);
        });
    });

    it('should set the title', () => {
        expect(headerService.setTitle).toHaveBeenCalledTimes(1);
    });

    describe('CompareBar', () => {
        beforeEach(() => {
            compareApiService = de.injector.get(CompareApiService);
            spyOn(compareApiService, 'remove');
        });

        it('should have compare bar', () => {
            const bar: DebugElement = de.query(By.css('car-compare-bar'));
            expect(bar).toBeTruthy();
        });

        it('should have cars to compare', () => {
            const bar: DebugElement = de.query(By.css('car-compare-bar'));
            bar.triggerEventHandler('remove', {
                id : '123'
            });

            expect(compareApiService.remove).toHaveBeenCalledWith('123');
        });
    });
});
