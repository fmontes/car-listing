import { Car } from '@models/api.model';

export const formatTitle = (car: Car) => {
    return `${car.brand} ${car.model} ${car.year}`;
};
