import { call, put } from "redux-saga/effects";
import api from "../../../services/apiCep";
import { loadSuccess, loadFailure } from "./actions";
import {AnyAction} from "redux";


function getItem(item:string) {
    return api.get(`cep/${item}`);
}

export default function* loadAddressAula (action:AnyAction) {
    console.log(action.payload.cep);
    try {
        const response = yield call(getItem, action.payload.cep);

        yield put(loadSuccess(response.data));
    }
    catch (e) {
        yield put(loadFailure());
    }
}