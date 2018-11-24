import { Component, OnInit, Input } from '@angular/core';
import { Car } from '@models/api.model';
import { CompareApiService } from '@core/services/compare-api/compare-api.service';

@Component({
    selector: 'car-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
    @Input() data: Car;

    constructor(private compareApiService: CompareApiService) {}

    ngOnInit() {
    }

    /**
     * Set car to compare
     *
     * @param {string} id
     * @memberof ItemComponent
     */
    setToCompare(value: boolean): void {
        if (value) {
            this.compareApiService.add(this.data.id);
        } else {
            this.compareApiService.remove(this.data.id);
        }
    }
}
