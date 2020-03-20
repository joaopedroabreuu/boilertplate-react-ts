import { all, takeLatest } from "redux-saga/effects";
import loadDataBlank from "./blank/sagas";
import {BlankTypes} from "./blank/types";

export default function* rootSaga () {
    return yield all([
        takeLatest(BlankTypes.LOAD_REQUEST, loadDataBlank)
    ])
}