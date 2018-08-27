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
     * Get a list of cars from the endpoint, you can pass a list of ids
     * separated by commas
     *
     * @param {string} [ids]
     * @returns {Observable<Car[]>}
     * @memberof CarApiService
     */
    getCars(ids?: string): Observable<Car[]> {
        return ids ? this.pickCars(ids) : of(data);
    }

    /**
     * Get a list of card filtered by brand
     *
     * @param {string} brand
     * @returns {Observable<Car[]>}
     * @memberof CarApiService
     */
    getCarsByBrand(brand: string): Observable<Car[]> {
        return of(
            brand
                ? data.filter(
                      (car) =>
                          car.brand.toLocaleLowerCase() ===
                          brand.toLocaleLowerCase()
                  )
                : data
        );
    }

    /**
     * Get a car by id
     *
     * @param {string} id
     * @returns {Observable<Car>}
     * @memberof CarApiService
     */
    getCarById(id: string): Observable<Car> {
        return of(data.filter((car) => car.id === id)[0]);
    }

    private pickCars(ids: string): Observable<Car[]> {
        let results = [];

        ids.split(',').forEach((id: string) => {
            return (results = [
                ...results,
                ...data.filter((car: Car) => car.id === id)
            ]);
        });

        return of(results);
    }
}
