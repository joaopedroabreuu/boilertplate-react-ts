import { call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { loadSuccess, loadFailure } from "./actions";

export default function* load () {
    try {
        const response = yield call(api.get, 'users/joaopedroabreuu/repos');

        yield put(loadSuccess(response.data));
    }
    catch (e) {
        yield put(loadFailure());
    }
}