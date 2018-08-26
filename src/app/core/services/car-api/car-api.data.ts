import { Car } from '@models/api.model';


export const data: Car[] = [
    {
        brand: 'BMW',
        model: 'X6',
        year: 2017,
        price: {
            original: 19999,
            final: 17990
        },
        image: {
            caption: 'Best car ever',
            src: 'an/url/image.jpg'
        }
    },
    {
        brand: 'Lexus',
        model: 'NX',
        year: 2019,
        price: {
            original: 120000,
            final: 117990
        },
        image: {
            caption: 'Best car ever',
            src: 'an/url/image.jpg'
        }
    },
    {
        brand: 'Mercedes Benz',
        model: 'Class G',
        year: 2012,
        price: {
            original: 55000,
            final: 54000
        },
        image: {
            caption: 'Best car ever',
            src: 'an/url/image.jpg'
        }
    }
];
