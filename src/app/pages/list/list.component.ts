import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent, concat } from 'rxjs';
import { map, switchMap, first } from 'rxjs/operators';

import { CarApiService } from '@services/car-api/car-api.service';
import { Car } from '@models/api.model';
import { HeaderService } from '@core/header/services/header.service';

@Component({
    selector: 'car-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    @ViewChild('search')
    search: ElementRef;
    cars$: Observable<Car[]>;

    constructor(public carApiService: CarApiService, private headerService: HeaderService) {}

    ngOnInit() {
        this.cars$ = concat(this.getInitialCarList(), this.getCarsByBrand()) ;
        this.headerService.setTitle();
    }

    private getInitialCarList(): Observable<Car[]> {
        return this.carApiService.getCars().pipe(first());
    }

    private getCarsByBrand(): Observable<Car[]> {
        return fromEvent<KeyboardEvent>(this.search.nativeElement, 'input')
            .pipe(
                map((e: Event) => e.target),
                map((e: HTMLInputElement) => e.value),
                switchMap((query: string) => this.carApiService.getCarsByBrand(query))
            );
    }
}
