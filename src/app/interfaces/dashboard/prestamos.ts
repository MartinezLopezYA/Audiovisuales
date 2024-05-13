export interface Prestamos {
    fecha: string,
    salon: string,
    estado: string,
    observacion: string,
    cedulaEncargado: number,
    codigoRel: number,
    cedulaDocente: number
}

export interface PrestamosUpdate {
    codigp: number,
    fecha: string,
    salon: string,
    estado: string,
    observacion: string,
    cedulaEncargado: number,
    codigoRel: number,
    cedulaDocente: number,
}

export interface PagePrestamo {
    dataResult: Prestamos[],
    totalItems: number,
    totalPages: number,
    currentPage: number
}