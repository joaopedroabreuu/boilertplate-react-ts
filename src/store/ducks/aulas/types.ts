export enum AulasTypes {
    LOAD_REQUEST = '@aulas/LOAD_REQUEST',
    LOAD_SUCCESS = '@aulas/LOAD_SUCCESS',
    LOAD_FAILURE = '@aulas/LOAD_FAILURE'
}

export interface Aula {
    bairro: string
    cidade: string
    logradouro: string
    estado: string
    cep?: number
}

export interface AulasState {
    readonly data: Aula
    readonly loading: boolean
    readonly error: boolean
}