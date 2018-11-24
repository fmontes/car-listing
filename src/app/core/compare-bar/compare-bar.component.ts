import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '@models/api.model';
import { staggerAnim } from '@pages/list/list.component';
import { Router } from '@angular/router';

@Component({
    animations: staggerAnim,
    selector: 'car-compare-bar',
    templateUrl: './compare-bar.component.html',
    styleUrls: ['./compare-bar.component.scss']
})
export class CompareBarComponent implements OnInit {
    @Output() remove: EventEmitter<Car> = new EventEmitter();

    @Input() data: Car[];

    constructor(private router: Router) {}

    ngOnInit() {}

    /**
     * Navigate to compare cars page
     * @param event
     */
    goToCompare(event: Event): void {
        event.preventDefault();
        const ids = this.data.map((car: Car) => car.id).join(',');
        this.router.navigate([`/compare/${ids}`]);
    }
}
