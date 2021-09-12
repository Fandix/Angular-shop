export interface newArrivalProducts {
    img: string,
    name: string,
    id: number,
    group: number,
    price: number,
    start: number
}

export enum ProductGroupEnum {
    MEN = 0,
    WOMEN = 1,
    SHOES = 2
}

export enum NewArrivalSelectEnum {
    ALL = 0,
    MEN = 1,
    WOMEN = 2,
    SHOES = 3
}