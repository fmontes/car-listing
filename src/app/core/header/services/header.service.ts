import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Car } from '@models/api.model';
import { Title } from '@angular/platform-browser';

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
    setTitle(car?: Car): void {
        const title: string = car ? this.getFormattedTitle(car) : 'Car Listing';
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

    private getFormattedTitle(car: Car): string {
        return `${car.brand} ${car.model} ${car.year}`;
    }
}
