import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SharedModule } from '@shared/shared.module';
import { ItemComponent } from '@shared/components/item/item.component';
import { data } from '@services/car-api/car-api.data';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderService } from '@core/header/services/header.service';

describe('ListComponent', () => {
    let component: ListComponent;
    let fixture: ComponentFixture<ListComponent>;
    let de: DebugElement;
    let headerService: HeaderService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListComponent],
            imports: [SharedModule, RouterTestingModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        headerService = de.injector.get(HeaderService);
        fixture.detectChanges();
    });

    it('should create a list of cars', () => {
        const items: ItemComponent[] = de.queryAll(By.css('car-item')).map(item => item.componentInstance);

        expect(items.length).toEqual(3);
        items.forEach((item, i) => {
            expect(item.data).toEqual(data[i]);
        });
    });

    xit('should set the title', () => {
        spyOn(headerService, 'setTitle');
        expect(headerService.setTitle).toHaveBeenCalledTimes(1);
    });
});
