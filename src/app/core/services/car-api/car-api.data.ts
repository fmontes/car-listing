import { Car } from '@models/api.model';

const desc = `
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
    <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
    <p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
`;

const teaser =
    'Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.';

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
            src: 'assets/images/brands/bmw/x6.jpg'
        },
        teaser: teaser,
        description: desc,
        features: {
            engine: '168-hp, 2.5-liter I-4 (regular gas)',
            transmission: '6-speed automatic',
            seats: 4,
            drivetrain: 'FWD',
            length: 178.1,
            wheelbase: 105.9,
            width: 72.4,
            height: 66.3
        }
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
            src: 'assets/images/brands/lexus/nx.jpg'
        },
        teaser: teaser,
        description: desc,
        features: {
            engine: '184-hp, 2.4-liter I-4 (regular gas)',
            transmission: '2-speed CVT',
            seats: 5,
            drivetrain: 'FWD',
            length: 176.7,
            wheelbase: 109.5,
            width: 73.1,
            height: 67.1
        }
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
            src: 'assets/images/brands/mercedes-benz/g-wagon.jpg'
        },
        teaser: teaser,
        description: desc,
        features: {
            engine: '176-hp, 2.5-liter I-4 (regular gas)',
            transmission: '6-speed automatic',
            seats: 7,
            drivetrain: 'FWD',
            length: 179.8,
            wheelbase: 107.8,
            width: 78.1,
            height: 67.8
        }
    },
    {
        id: 'toyota-tundra-2019',
        brand: 'Toyota',
        model: 'Tundra',
        year: 2019,
        price: {
            original: 155000,
            final: 154000
        },
        image: {
            caption: 'Best car ever',
            src: 'assets/images/brands/toyota/tundra.jpg'
        },
        teaser: teaser,
        description: desc,
        features: {
            engine: '200-hp, 6.5-liter I-4 (regular gas)',
            transmission: '6-speed automatic',
            seats: 3,
            drivetrain: 'FWD',
            length: 209.8,
            wheelbase: 127.8,
            width: 98.1,
            height: 87.8
        }
    },
    {
        id: 'nissan-patrol-2019',
        brand: 'Nissan',
        model: 'Patrol',
        year: 2019,
        price: {
            original: 87000,
            final: 86000
        },
        image: {
            caption: 'Best car ever',
            src: 'assets/images/brands/nissan/patrol.jpg'
        },
        teaser: teaser,
        description: desc,
        features: {
            engine: '200-hp, 6.5-liter I-4 (regular gas)',
            transmission: '6-speed automatic',
            seats: 3,
            drivetrain: 'FWD',
            length: 209.8,
            wheelbase: 127.8,
            width: 98.1,
            height: 87.8
        }
    },
    {
        id: 'nissan-pathfinder-2014',
        brand: 'Nissan',
        model: 'Pathfinder',
        year: 2012,
        price: {
            original: 25000,
            final: 23000
        },
        image: {
            caption: 'Best car ever',
            src: 'assets/images/brands/nissan/pathfinder.jpg'
        },
        teaser: teaser,
        description: desc,
        features: {
            engine: '176-hp, 2.5-liter I-4 (regular gas)',
            transmission: '6-speed automatic',
            seats: 7,
            drivetrain: 'FWD',
            length: 179.8,
            wheelbase: 107.8,
            width: 78.1,
            height: 67.8
        }
    },
];
