export interface Implementos {
    codigo: string,
    implemento: string,
    caracteristicas: string,
    createdAt: string,
    updatedAt: string
}

export interface NewImplemento {
    codigo: string,
    implemento: string,
    caracteristicas: string,
}

export interface UpdateImplemento {
    codigo: string,
    implemento: string,
    caracteristicas: string,
}

export interface PageImplementos {
    dataResult: Implementos[],
    totalItems: number,
    totalPages: number,
    currentPage: number
}