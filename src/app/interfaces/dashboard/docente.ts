export interface Docente {
    cedulaDocente: number;
    nombre: string;
    facultad: string;
    clase: string;
    createdAt: string;
    updatedAt: string;
}

export interface NewDocente {
    cedulaDocente: number,
    nombre: string;
    facultad: string;
    clase: string;
}

export interface PageDocente {
    dataResult: Docente[],
    totalItems: number,
    totalPages: number,
    currentPage: number
}