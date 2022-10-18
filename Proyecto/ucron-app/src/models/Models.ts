
export const API_URL = 'http://localhost:4000';

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
