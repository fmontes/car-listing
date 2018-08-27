import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from '@core/header/services/header.service';
import { Car } from '@models/api.model';

@Component({
    selector: 'car-compare',
    templateUrl: './compare.component.html',
    styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
    cars: Car[];
    constructor(
        private route: ActivatedRoute,
        private headerService: HeaderService
    ) {}

    ngOnInit() {
        this.cars = this.route.snapshot.data.cars;
        this.headerService.setTitle('Compare Cars');
    }
}
