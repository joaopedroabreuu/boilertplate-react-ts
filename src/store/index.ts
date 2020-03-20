import {createStore, applyMiddleware, Store} from "redux";
import createSagaMiddleware from "redux-saga";
import { BlankState } from "./ducks/blank/types";
import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

export interface ApplicationState {
    blank: BlankState,
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;