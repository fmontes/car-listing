import { Component, OnInit, Input } from '@angular/core';
import { CarImage } from '@models/api.model';

@Component({
    selector: 'car-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
    @Input() data: CarImage;

    constructor() {}

    ngOnInit() {
    }
}
