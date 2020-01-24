export enum AddressesTypes {
    LOAD_REQUEST = '@addresses/LOAD_REQUEST',
    LOAD_SUCCESS = '@addresses/LOAD_SUCCESS',
    LOAD_FAILURE = '@addresses/LOAD_FAILURE'
}

export interface Address {
    bairro: string
    cidade: string
    logradouro: string
    estado: string
    cep?: number
}

export interface AddressesState {
    readonly data: Address
    readonly loading: boolean
    readonly error: boolean
}