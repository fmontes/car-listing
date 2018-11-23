import { Component, OnInit, Input } from '@angular/core';
import { Car } from '@models/api.model';
import { CompareApiService } from '@core/services/compare-api/compare-api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'car-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
    @Input() data: Car;

    comparedDisabled$: Observable<boolean>;
    compareChecked = false;

    constructor(private compareApiService: CompareApiService) {}

    ngOnInit() {
        this.comparedDisabled$ = this.compareApiService
            .getIds$()
            .pipe(
                map(
                    (ids: string) =>
                        ids.split(',').length >= 3 && !this.compareChecked
                )
            );
    }

    /**
     * Set car to compare
     *
     * @param {string} id
     * @memberof ItemComponent
     */
    setToCompare(value: boolean): void {
        this.compareChecked = value;

        if (value) {
            this.compareApiService.add(this.data.id);
        } else {
            this.compareApiService.remove(this.data.id);
        }
    }
}
