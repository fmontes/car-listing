import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageComponent } from './image.component';
import { DebugElement, Component, OnInit } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CarImage } from '@models/api.model';

@Component({
    selector: 'car-host-test',
    template: '<car-image [data]="data"></car-image>',
})
class HostComponent implements OnInit {
    data: CarImage;

    ngOnInit() {
        this.data = {
            src: 'an/url/image.jpg',
            caption: 'Hello World'
        };
    }
}

describe('ImageComponent', () => {
    let hostFixture: ComponentFixture<HostComponent>;
    let hostDe: DebugElement;

    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ImageComponent, HostComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        hostFixture = TestBed.createComponent(HostComponent);
        hostDe = hostFixture.debugElement;
        de = hostDe.query(By.css('car-image'));
        hostFixture.detectChanges();
    });

    it('should have figure', () => {
        const figure: DebugElement = de.query(By.css('figure'));
        expect(figure).toBeTruthy();
    });

    it('should have img attr setup correctly', () => {
        const image: DebugElement = de.query(By.css('img'));
        expect(image.nativeElement.src).toContain('/an/url/image.jpg');
        expect(image.nativeElement.alt).toContain('Hello World');
    });
});
