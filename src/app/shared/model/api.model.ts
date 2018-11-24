export interface CarImage {
    src: string;
    caption: string;
}

export interface CarPrice {
    original?: number;
    final: number;
}

export interface CarFeatures {
    engine: string;
    transmission: string;
    seats: number;
    drivetrain: string;
    length: number;
    wheelbase: number;
    width: number;
    height: number;
}

export interface Car {
    brand: string;
    description: string;
    id: string;
    image: CarImage;
    model: string;
    price: CarPrice;
    teaser: string;
    year: number;
    features: CarFeatures;
    selected?: boolean;
}
