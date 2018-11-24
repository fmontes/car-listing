import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter, switchMap, defaultIfEmpty } from 'rxjs/operators';
import { CarApiService } from '../car-api/car-api.service';
import { Car } from '@models/api.model';

@Injectable({
    providedIn: 'root'
})
export class CompareApiService {
    items$: BehaviorSubject<string[]> = new BehaviorSubject([]);
    private items: string[] = [];

    constructor(private carApiService: CarApiService) {}

    /**
     * Add car to compare
     *
     * @param {string} id
     * @memberof CompareApiService
     */
    add(id: string): void {
        this.items = [...this.items, ...[id]];
        this.items$.next(this.items);
    }

    /**
     * Get cars to compare
     *
     * @returns {Observable<Car[]>}
     * @memberof CompareApiService
     */
    getComparableItems$(): Observable<Car[]> {
        return this.getIds$().pipe(
            switchMap((ids: string[]) => this.carApiService.getCars(ids))
        );
    }

    /**
     * Get a string of ids to compare
     *
     * @returns {Observable<string>}
     * @memberof CompareApiService
     */
    getIds$(): Observable<string[]> {
        return this.items$
            .asObservable();
            // .pipe(
            //     filter((ids: string[]) => ids.length > 1),
            //     defaultIfEmpty([])
            // );
    }

    /**
     * Remove car to compare
     *
     * @param {string} id
     * @memberof CompareApiService
     */
    remove(id: string): void {
        this.items = this.items.filter((e) => e !== id);
        this.items$.next(this.items);
    }

    /**
     * Clear the selection to compare
     *
     * @memberof CompareApiService
     */
    clear() {
        this.items = [];
        this.items$.next([]);
    }
}
