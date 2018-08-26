import { Component, OnInit, Input } from '@angular/core';
import { CarPrice } from '@models/api.model';

@Component({
    selector: 'car-price',
    templateUrl: './price.component.html',
    styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
    @Input() data: CarPrice;

    constructor() {}

    ngOnInit() {}
}
