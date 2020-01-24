import {createStore, applyMiddleware, Store} from "redux";
import createSagaMiddleware from "redux-saga";
import { RepositoriesState } from "./ducks/repositories/types";
import { AddressesState } from "./ducks/addresses/types";
import { AulasState } from "./ducks/aulas/types";
import rootReducer from "./ducks/rootReducer";
import rooSaga from "./ducks/rooSaga";

export interface ApplicationState {
    repositories: RepositoriesState,
    addresses: AddressesState,
    aulas: AulasState,
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rooSaga);

export default store;