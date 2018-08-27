import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HeaderService } from './services/header.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter, switchMap, take } from 'rxjs/operators';
import { CompareApiService } from '@core/services/compare-api/compare-api.service';

@Component({
    selector: 'car-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    compareIds$: Observable<string>;
    showBack$: Observable<boolean>;
    title$: Observable<string>;

    constructor(
        private headerService: HeaderService,
        private compareApiService: CompareApiService,
        private router: Router
    ) {}

    ngOnInit() {
        this.title$ = this.headerService.getTitle();

        this.showBack$ = this.router.events.pipe(
            filter((event: NavigationEnd) => event instanceof NavigationEnd),
            switchMap((event: NavigationEnd) => of(event.url !== '/'))
        );

        this.compareIds$ = this.compareApiService.items$;
    }

    /**
     * Navigate to compare cars page
     * @param event
     */
    goToCompare(event: Event): void {
        event.preventDefault();
        this.compareApiService
            .getIds$()
            .pipe(take(1))
            .subscribe((ids: string) => {
                this.router.navigate([`/compare/${ids}`]);
            });
    }
}
