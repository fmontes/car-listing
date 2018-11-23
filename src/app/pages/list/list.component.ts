import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
    trigger,
    style,
    animate,
    transition,
    query,
    stagger
} from '@angular/animations';
import { Observable, fromEvent, concat } from 'rxjs';
import { map, switchMap, first, tap } from 'rxjs/operators';

import { CarApiService } from '@services/car-api/car-api.service';
import { Car } from '@models/api.model';
import { HeaderService } from '@core/header/services/header.service';
import { CompareApiService } from '@core/services/compare-api/compare-api.service';

@Component({
    animations: [
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
    ],
    selector: 'car-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    @ViewChild('search')
    search: ElementRef;
    cars$: Observable<Car[]>;

    constructor(
        public carApiService: CarApiService,
        private headerService: HeaderService,
        private compareApiService: CompareApiService
    ) {}

    ngOnInit() {
        this.cars$ = concat(this.getInitialCarList(), this.getCarsByBrand());
        this.headerService.setTitle();
        this.compareApiService.clear();
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
            switchMap((query: string) => {
                return this.carApiService
                    .getCarsByBrand(query)
                    .pipe(tap(() => this.compareApiService.clear()));
            })
        );
    }
}
