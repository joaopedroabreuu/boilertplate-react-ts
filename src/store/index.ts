import {createStore, applyMiddleware, Store} from "redux";
import createSagaMiddleware from "redux-saga";
import { RepositoriesState } from "./ducks/repositories/types";
import rootReducer from "./ducks/rootReducer";
import rooSaga from "./ducks/rooSaga";

export interface ApplicationState {
    repositories: RepositoriesState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rooSaga);

export default store;