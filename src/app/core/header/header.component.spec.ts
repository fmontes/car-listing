import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            imports: [RouterTestingModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        fixture.detectChanges();
    });

    it('should have header tag', () => {
        expect(de.query(By.css('header'))).toBeTruthy();
    });

    it('should have title', () => {
        const title: DebugElement = de.query(By.css('header h1'));
        expect(title.nativeElement.textContent).toEqual('Car Listing');
    });

    it('should not have back button', () => {
        expect(de.query(By.css('.btn'))).toBeFalsy();
    });

    // TODO: need to mock the router events
    xit('should not have back button', () => {
        expect(de.query(By.css('.btn'))).toBeTruthy();
    });
});
