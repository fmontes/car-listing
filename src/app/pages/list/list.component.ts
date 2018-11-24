import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
    trigger,
    style,
    animate,
    transition,
    query,
    stagger
} from '@angular/animations';
import { Observable, fromEvent, concat, combineLatest } from 'rxjs';
import { map, switchMap, first, tap } from 'rxjs/operators';

import { CarApiService } from '@services/car-api/car-api.service';
import { Car } from '@models/api.model';
import { HeaderService } from '@core/header/services/header.service';
import { CompareApiService } from '@core/services/compare-api/compare-api.service';

export const staggerAnim = [
    trigger('listStagger', [
        transition('* <=> *', [
            query(
                ':enter',
                [
                    style({ opacity: 0, transform: 'translateY(15px)' }),
                    stagger(
                        '50ms',
                        animate(
                            '550ms ease-out',
                            style({
                                opacity: 1,
                                transform: 'translateY(0px)'
                            })
                        )
                    )
                ],
                { optional: true }
            ),
            query(':leave', animate('50ms', style({ opacity: 0 })), {
                optional: true
            })
        ])
    ])
];

@Component({
    animations: staggerAnim,
    selector: 'car-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    @ViewChild('search') search: ElementRef;
    cars$: Observable<Car[]>;
    comparables$: Observable<Car[]>;

    constructor(
        public carApiService: CarApiService,
        private headerService: HeaderService,
        private compareApiService: CompareApiService
    ) {}

    ngOnInit() {
        this.headerService.setTitle();
        this.compareApiService.clear();

        const cars$: Observable<Car[]> = concat(this.getInitialCarList(), this.getCarsByBrand());
        this.comparables$ = this.compareApiService.getComparableItems$();

        this.cars$ = combineLatest(this.comparables$, cars$).pipe(
            map(([comparables, cars]) => this.markSelectedCars(comparables, cars))
        );
    }

    /**
     * Remove car from comparison
     *
     * @param {Car} car
     * @memberof ListComponent
     */
    onCompareRemove(car: Car): void {
        this.compareApiService.remove(car.id);
    }

    private markSelectedCars(comparables, cars): Car[] {
        return cars.map((car: Car) => {
            car.selected = this.isCarSelected(car, comparables);
            return car;
        });
    }

    private isCarSelected(car: Car, comparables: Car[]): boolean {
        return !!comparables.find(
            (selected: Car) => selected === car
        );
    }

    private getInitialCarList(): Observable<Car[]> {
        return this.carApiService.getCars().pipe(first());
    }

    private getCarsByBrand(): Observable<Car[]> {
        return fromEvent<KeyboardEvent>(
            this.search.nativeElement,
            'input'
        ).pipe(
            map((e: Event) => e.target),
            map((e: HTMLInputElement) => e.value),
            switchMap((brand: string) => {
                return this.carApiService
                    .getCarsByBrand(brand)
                    .pipe(tap(() => this.compareApiService.clear()));
            })
        );
    }
}
