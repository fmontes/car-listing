import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbComponent } from './thumb.component';
import { ImageComponent } from '@shared/components/image/image.component';
import { data } from '@core/services/car-api/car-api.data';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ThumbComponent', () => {
    let component: ThumbComponent;
    let fixture: ComponentFixture<ThumbComponent>;
    let de: DebugElement;
    let image: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ThumbComponent, ImageComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ThumbComponent);
        de = fixture.debugElement;
        component = fixture.componentInstance;
        component.data = data[0];
        fixture.detectChanges();
        image = de.query(By.css('car-image'));
    });

    it('should have car-image', () => {
        expect(image).toBeTruthy();
        expect(image.componentInstance.data).toEqual({
            caption: 'Best car ever',
            src: 'assets/images/brands/bmw/x6.jpg'
        });
    });

    it('should emit remove', () => {
        spyOn(component.remove, 'emit');
        de.triggerEventHandler('click', {});
        expect(component.remove.emit).toHaveBeenCalledWith(data[0]);
    });
});
