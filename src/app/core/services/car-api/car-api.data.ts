import { Car } from '@models/api.model';

const desc = `
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
    <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
    <p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
`;

const teaser = 'Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.';

export const data: Car[] = [
    {
        id: 'bmw-x6-2017',
        brand: 'BMW',
        model: 'X6',
        year: 2017,
        price: {
            original: 19999,
            final: 17990
        },
        image: {
            caption: 'Best car ever',
            src: '/assets/images/brands/bmw/x6.jpg'
        },
        teaser: teaser,
        description: desc
    },
    {
        id: 'lexus-nx-2019',
        brand: 'Lexus',
        model: 'NX',
        year: 2019,
        price: {
            original: 120000,
            final: 117990
        },
        image: {
            caption: 'Best car ever',
            src: '/assets/images/brands/lexus/nx.jpg'
        },
        teaser: teaser,
        description: desc
    },
    {
        id: 'mercedes-benz-class-g-2012',
        brand: 'Mercedes Benz',
        model: 'Class G',
        year: 2012,
        price: {
            original: 55000,
            final: 54000
        },
        image: {
            caption: 'Best car ever',
            src: '/assets/images/brands/mercedes-benz/g-wagon.jpg'
        },
        teaser: teaser,
        description: desc
    }
];
