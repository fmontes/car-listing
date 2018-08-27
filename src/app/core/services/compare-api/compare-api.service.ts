import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CompareApiService {
    items$: BehaviorSubject<string> = new BehaviorSubject('');
    items = [];

    constructor() {}

    /**
     * Add car to compare
     *
     * @param {string} id
     * @memberof CompareApiService
     */
    add(id: string): void {
        this.items = [...this.items, ...[id]];
        this.items$.next(this.items.join(','));
    }

    /**
     * Get a string of ids to compare
     *
     * @returns {Observable<string>}
     * @memberof CompareApiService
     */
    getIds$(): Observable<string> {
        return this.items$.asObservable().pipe(filter((ids: string) => ids.split(',').length > 1));
    }

    /**
     * Remove car to compare
     *
     * @param {string} id
     * @memberof CompareApiService
     */
    remove(id: string): void {
        this.items = this.items.filter((e) => e !== id);
        this.items$.next(this.items.join(','));
    }

    /**
     * Clear the selection to compare
     *
     * @memberof CompareApiService
     */
    clear() {
        this.items = [];
        this.items$.next('');
    }
}
