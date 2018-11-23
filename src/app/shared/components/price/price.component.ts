import { Component, Input } from '@angular/core';
import { CurrencyService } from '@services/currency/currency.service';

@Component({
    selector: 'car-price',
    templateUrl: './price.component.html',
    styleUrls: ['./price.component.scss']
})
export class PriceComponent {
    @Input() original: number;
    @Input() final: number;

    constructor(private currencyService: CurrencyService) {}

    format(n: number): string {
        return this.currencyService.format(n);
    }
}
