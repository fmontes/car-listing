import { Component, OnInit, Input } from '@angular/core';
import { Car } from '@models/api.model';

@Component({
    selector: 'car-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
    @Input() data: Car;
    title: string;

    constructor() {}

    ngOnInit() {
        this.title = `${this.data.brand} ${this.data.model}`;
    }
}
