
export interface Habitacion {
    _id:            string;
    nombre:         string;
    foto:           Foto;
    descripcion:    string;
    precio:         number;
    numeropersonas: number;
    estado:         boolean;
}

export interface Foto {
    imagen1: string;
    imagen2: string;
    imagen3: string;
    imagen4: string;
}