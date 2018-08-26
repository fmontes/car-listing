import { TestBed } from '@angular/core/testing';
import { CarApiService } from './car-api.service';
import { Car } from '@models/api.model';
import { data } from '@services/car-api/car-api.data';

describe('Service: CarApi', () => {
    let service: CarApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CarApiService]
        });
        service = new CarApiService();
    });

    it('should get a list of cars', (done) => {
        service.getCars().subscribe((cars: Car[]) => {
            expect(cars.map((car) => car.brand)).toEqual(['BMW', 'Lexus', 'Mercedes Benz']);
            done();
        });
    });

    it('should get a car by id', (done) => {
        service.getCarById('bmw-x6-2017').subscribe((car: Car) => {
            expect(car).toEqual(data[0]);
            done();
        });
    });
});
