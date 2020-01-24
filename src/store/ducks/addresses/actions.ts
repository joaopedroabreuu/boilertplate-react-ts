import { action } from 'typesafe-actions';
import { AddressesTypes, Address } from "./types";

export const loadRequest = (cep: number) => action(AddressesTypes.LOAD_REQUEST, { cep });
export const loadSuccess = (data: Address) => action(AddressesTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(AddressesTypes.LOAD_FAILURE);