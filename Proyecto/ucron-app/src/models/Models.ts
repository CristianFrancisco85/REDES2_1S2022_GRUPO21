
export const API_URL = 'http://ec2-54-235-234-36.compute-1.amazonaws.com:4000';

export interface User {
    id:    number;
    name : string,
    img : string,
    carnet : string,
    puesto : string,
    curso : string,
    description : string,
}

export interface Data {
    id:    number;
    serie: string;
    marca: number;
    valor: number;
}


export interface Puesto {
    id:          number;
    title:       string;
    description: string;
}
