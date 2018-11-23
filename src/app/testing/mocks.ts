import { CarImage, Car, CarPrice } from '@models/api.model';
import { data } from '@core/services/car-api/car-api.data';

export const carImageMock: CarImage = {
    caption: 'Best car ever',
    src: 'assets/images/brands/bmw/x6.jpg'
};

export const carPriceMock: CarPrice = {
    original: 19999,
    final: 17990
};

export const carItemMock: Car = data[0];
