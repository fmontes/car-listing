import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CurrencyService {
    private options = {
        lang: 'en-US',
        style: { style: 'currency', currency: 'USD' }
    };

    constructor() {}

    format(n: number): string {
        return new Intl.NumberFormat(
            this.options.lang,
            this.options.style
        ).format(n);
    }
}
