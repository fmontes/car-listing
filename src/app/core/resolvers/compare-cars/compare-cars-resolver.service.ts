import { Injectable } from '@angular/core';
import {
    Resolve,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Car } from '@models/api.model';
import { Observable } from 'rxjs';
import { CarApiService } from '@services/car-api/car-api.service';

@Injectable()
export class CompareCarsResolverService implements Resolve<Car[]> {
    constructor(private carApiService: CarApiService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Car[]> {
        return this.carApiService.getCars(route.params.id.split(','));
    }
}
