import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Car } from '@models/api.model';

@Component({
    selector: 'car-thumb',
    templateUrl: './thumb.component.html',
    styleUrls: ['./thumb.component.scss']
})
export class ThumbComponent implements OnInit {
    @Input() data: Car;
    @Output() remove: EventEmitter<Car> = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    @HostListener('click')
    onClick(): void {
        this.remove.emit(this.data);
    }
}
