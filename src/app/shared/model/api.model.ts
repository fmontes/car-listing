export interface CarImage {
    src: string;
    caption: string;
}

export interface CarPrice {
    original?: number;
    final: number;
}

export interface Car {
    brand: string;
    model: string;
    year: number;
    price: CarPrice;
    image: CarImage;
}
