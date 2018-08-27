/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CompareComponent } from '@pages/compare/compare.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@shared/shared.module';


describe('CompareComponent', () => {
    let component: CompareComponent;
    let fixture: ComponentFixture<CompareComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CompareComponent],
            imports: [RouterTestingModule, SharedModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CompareComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
