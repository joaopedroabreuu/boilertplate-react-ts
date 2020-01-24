import { action } from 'typesafe-actions';
import { RepositoriesTypes, Repository } from "./types";

export const loadRequest = (text: string) => action(RepositoriesTypes.LOAD_REQUEST, { text });
export const loadSuccess = (data: Repository[]) => action(RepositoriesTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE);