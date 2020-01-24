import { action } from 'typesafe-actions';
import { AulasTypes, Aula } from "./types";

export const loadRequest = (cep: number) => action(AulasTypes.LOAD_REQUEST, { cep });
export const loadSuccess = (data: Aula) => action(AulasTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(AulasTypes.LOAD_FAILURE);