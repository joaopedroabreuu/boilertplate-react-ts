import { call, put } from "redux-saga/effects";
import api from "../../../services/apiCep";
import { loadSuccess, loadFailure } from "./actions";
import {AnyAction} from "redux";


function getAddress(cep:string) {
    return api.get(`cep/${cep}`);
}

export default function* loadAddress (action:AnyAction) {
    console.log(action.payload.cep);
    try {
        const response = yield call(getAddress, action.payload.cep);

        yield put(loadSuccess(response.data));
    }
    catch (e) {
        yield put(loadFailure());
    }
}