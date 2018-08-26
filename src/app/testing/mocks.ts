import { CarImage, CarItem, CarPrice } from '../shared/model/api.model';

export const carImageMock: CarImage = {
    caption: 'Best car evet',
    src: 'an/url/image.jpg'
};

export const carPriceMock: CarPrice = {
    original: 19999,
    final: 17990
};

export const carItemMock: CarItem = {
    brand: 'BMW',
    model: 'X6',
    year: 2017,
    price: carPriceMock,
    image: carImageMock
};
