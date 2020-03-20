import { call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { requestSuccess, requestFailure } from "./actions";
import { AnyAction } from "redux";


function getAddress(cep:string) {
    return api.get(`cep/${cep}`);
}

export default function* loadDataBlank (action:AnyAction) {
    const { param, callback } = action.payload;
    try {
        const response = yield call(getAddress, param);
        yield put(requestSuccess(response.data));
        if (typeof callback === 'function') callback('success', response);
    }
    catch (e) {
        yield put(requestFailure());
        if (typeof callback === 'function') callback('error', e);
    }
}