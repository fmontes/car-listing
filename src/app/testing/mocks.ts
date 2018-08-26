import { CarImage, Car, CarPrice } from '@models/api.model';

export const carImageMock: CarImage = {
    caption: 'Best car ever',
    src: 'an/url/image.jpg'
};

export const carPriceMock: CarPrice = {
    original: 19999,
    final: 17990
};

export const carItemMock: Car = {
    brand: 'BMW',
    model: 'X6',
    year: 2017,
    price: carPriceMock,
    image: carImageMock
};
