import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareBarComponent } from './compare-bar.component';
import { ThumbComponent } from './components/thumb/thumb.component';
import { ImageComponent } from '@shared/components/image/image.component';
import { RouterTestingModule } from '@angular/router/testing';
import { data } from '@core/services/car-api/car-api.data';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('CompareBarComponent', () => {
    let component: CompareBarComponent;
    let fixture: ComponentFixture<CompareBarComponent>;
    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CompareBarComponent, ThumbComponent, ImageComponent],
            imports: [RouterTestingModule, BrowserAnimationsModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CompareBarComponent);
        de = fixture.debugElement;
        component = fixture.componentInstance;
        component.data = [
            data[0],
            data[1]
        ];
        fixture.detectChanges();
    });

    it('should have car-thumb', () => {
        const thumbs = de.queryAll(By.css('car-thumb'));
        expect(thumbs.length).toBe(2);
    });
});
