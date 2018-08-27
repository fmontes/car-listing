import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Car } from '@models/api.model';
import { Title } from '@angular/platform-browser';
import { formatTitle } from '@core/utils/title-formatter';

@Injectable({
    providedIn: 'root'
})
export class HeaderService {
    title$: BehaviorSubject<string> = new BehaviorSubject('Car Listing');

    constructor(private titleService: Title) {}

    /**
     * Set the title for the header
     *
     * @param {string} title
     * @memberof HeaderService
     */
    setTitle(car?: Car | string): void {
        let title: string;

        if (typeof car === 'string') {
            title = car;
        } else {
            title = car ? formatTitle(car) : 'Car Listing';
        }

        this.titleService.setTitle(title);
        this.title$.next(title);
    }

    /**
     * Get the title for the header
     *
     * @returns {Observable<string>}
     * @memberof HeaderService
     */
    getTitle(): Observable<string> {
        return this.title$.asObservable();
    }
}
