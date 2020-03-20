import { AddressesTypes } from "./types";
import {FactoryActionsTypes} from "../../factories/factoryActionsTypes";

const actions = new FactoryActionsTypes(AddressesTypes);

export const doRequest = actions.doRequest;
export const requestSuccess = actions.requestSuccess;
export const requestFailure = actions.requestFailure;