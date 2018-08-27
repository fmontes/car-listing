import { Injectable } from '@angular/core';
import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { Car } from '@models/api.model';
import { Observable } from 'rxjs';
import { CarApiService } from '@services/car-api/car-api.service';

@Injectable()
export class CarResolverService implements Resolve<Car> {
    constructor(private carApiService: CarApiService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Car> {
        return this.carApiService.getCarById(route.params.id);
    }
}
