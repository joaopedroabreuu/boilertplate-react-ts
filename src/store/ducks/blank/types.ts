export enum BlankTypes {
    LOAD_REQUEST = '@blank/LOAD_REQUEST',
    LOAD_SUCCESS = '@blank/LOAD_SUCCESS',
    LOAD_FAILURE = '@blank/LOAD_FAILURE'
}

export interface Blank {
    bairro: string
    cidade: string
    logradouro: string
    estado: string
    cep?: number
}

export interface BlankState {
    readonly data: Blank
    readonly loading: boolean
    readonly error: boolean
}