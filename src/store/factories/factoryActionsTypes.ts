import { action } from 'typesafe-actions';
import { CallbackType } from "./types";

export class FactoryActionsTypes {

    type?:any;
    doRequest?:any;
    requestSuccess?:any;
    requestFailure?:any;

    constructor(type:any) {
        this.type = type;

        this.doRequest = (param?: any, callback?: CallbackType) =>
            action(this.type.LOAD_REQUEST, { param, callback });

        this.requestSuccess = (data: any) =>
            action(this.type.LOAD_SUCCESS, { data });

        this.requestFailure = () =>
            action(this.type.LOAD_FAILURE);
    }
}