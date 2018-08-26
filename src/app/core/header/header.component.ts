import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderService } from './services/header.service';

@Component({
    selector: 'car-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    title$: Observable<string>;

    constructor(private headerService: HeaderService) {}

    ngOnInit() {
        this.title$ = this.headerService.getTitle();
    }
}
