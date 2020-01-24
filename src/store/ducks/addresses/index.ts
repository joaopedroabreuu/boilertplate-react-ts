import { Reducer } from "redux";
import {AddressesState, AddressesTypes} from "./types";

const INITIAL_STATE: AddressesState = {
    data: {
        bairro: '',
        cidade: '',
        logradouro: '',
        estado: ''
    },
    error: false,
    loading: false
};

const reducer: Reducer<AddressesState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AddressesTypes.LOAD_REQUEST :
            return {...state, loading: true};
        case AddressesTypes.LOAD_SUCCESS :
            return {...state, loading: false, error: false, data: action.payload.data};
        case AddressesTypes.LOAD_FAILURE :
            return {...state, loading: false, error: true, data: INITIAL_STATE.data};
        default:
            return state;
    }
};

export default reducer;