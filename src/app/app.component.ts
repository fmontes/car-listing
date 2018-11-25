import { Component } from '@angular/core';

import {
    trigger,
    animate,
    transition,
    style,
    query
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
    transition('* => *', [
        query(':enter', [style({ opacity: 0 })], { optional: true }),
        query(
            ':leave',
            [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
            { optional: true }
        ),
        query(
            ':enter',
            [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
            { optional: true }
        )
    ])
]);

@Component({
    animations: [fadeAnimation],
    selector: 'car-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'car-listing';
}
