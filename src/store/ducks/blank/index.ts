import { Reducer } from "redux";
import { BlankState, BlankTypes } from "./types";

const INITIAL_STATE: BlankState = {
    data: {
        bairro: '',
        cidade: '',
        logradouro: '',
        estado: ''
    },
    error: false,
    loading: false
};

const reducer: Reducer<BlankState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BlankTypes.LOAD_REQUEST :
            return {...state, loading: true};
        case BlankTypes.LOAD_SUCCESS :
            return {...state, loading: false, error: false, data: action.payload.data};
        case BlankTypes.LOAD_FAILURE :
            return {...state, loading: false, error: true, data: INITIAL_STATE.data};
        default:
            return state;
    }
};

export default reducer;