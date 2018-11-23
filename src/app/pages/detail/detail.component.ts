import { Component, OnInit } from '@angular/core';
import { Car } from '@models/api.model';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from '@core/header/services/header.service';

@Component({
    selector: 'car-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
    car: Car;

    constructor(
        private route: ActivatedRoute,
        private headerService: HeaderService
    ) {}

    ngOnInit() {
        this.car = <Car>this.route.snapshot.data.car;
        this.headerService.setTitle(this.car);
    }
}
