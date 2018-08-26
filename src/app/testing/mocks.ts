import { CarImage, Car, CarPrice } from '@models/api.model';

export const carImageMock: CarImage = {
    caption: 'Best car ever',
    src: '/assets/images/brands/bmw/x6.jpg'
};

export const carPriceMock: CarPrice = {
    original: 19999,
    final: 17990
};

export const carItemMock: Car = {
    brand: 'BMW',
    description: '<p>Hi</p>',
    id: 'bmw-x6-2017',
    image: carImageMock,
    model: 'X6',
    price: carPriceMock,
    teaser: 'Hello World',
    year: 2017
};
