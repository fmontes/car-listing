import { Component, OnInit } from '@angular/core';
import { CarApiService } from '@services/car-api/car-api.service';
import { Car } from '@models/api.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'car-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    cars: Observable<Car[]>;

    constructor(public carApiService: CarApiService) {}

    ngOnInit() {
        this.cars = this.carApiService.getCars();
    }
}
