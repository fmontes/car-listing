import { Component, OnInit, Input } from '@angular/core';
import { CarPrice } from '@models/api.model';
import { CurrencyService } from '@services/currency/currency.service';

@Component({
    selector: 'car-price',
    templateUrl: './price.component.html',
    styleUrls: ['./price.component.scss']
})
export class PriceComponent {
    @Input()
    data: CarPrice;

    constructor(private currencyService: CurrencyService) {}

    format(n: number): string {
        return this.currencyService.format(n);
    }
}
