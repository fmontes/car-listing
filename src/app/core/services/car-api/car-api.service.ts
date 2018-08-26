import { Injectable } from '@angular/core';
import { Car } from '@models/api.model';
import { data } from '@services/car-api/car-api.data';
import { of, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CarApiService {
    constructor() {}

    /**
     * Get a list of cars from the endpoint
     *
     * @returns {Observable<Car[]>}
     * @memberof CarApiService
     */
    getCars(): Observable<Car[]> {
        return of(data);
    }
}
