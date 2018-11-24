import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HeaderService } from './services/header.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs/operators';

@Component({
    selector: 'car-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    compareIds$: Observable<string[]>;
    showBack$: Observable<boolean>;
    title$: Observable<string>;

    constructor(
        private headerService: HeaderService,
        private router: Router
    ) {}

    ngOnInit() {
        this.title$ = this.headerService.getTitle();

        this.showBack$ = this.router.events.pipe(
            filter((event: NavigationEnd) => event instanceof NavigationEnd),
            switchMap((event: NavigationEnd) => of(event.url !== '/'))
        );

    }
}
