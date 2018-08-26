import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement, Component, OnInit } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ImageComponent } from './image.component';
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

    it('should have img attr setup correctly', () => {
        const image: DebugElement = de.query(By.css('div'));
        expect(image.nativeElement.style.backgroundImage).toContain('url("an/url/image.jpg")');
        expect(image.nativeElement.getAttribute('aria-label')).toContain('Hello World');
    });
});
