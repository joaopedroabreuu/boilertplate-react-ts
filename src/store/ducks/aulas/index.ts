import { Reducer } from "redux";
import {AulasState, AulasTypes} from "./types";

const INITIAL_STATE: AulasState = {
    data: {
        bairro: '',
        cidade: '',
        logradouro: '',
        estado: '',
    },
    error: false,
    loading: false
};

const reducer: Reducer<AulasState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AulasTypes.LOAD_REQUEST :
            return {...state, loading: true};
        case AulasTypes.LOAD_SUCCESS :
            return {...state, loading: false, error: false, data: action.payload.data};
        case AulasTypes.LOAD_FAILURE :
            return {...state, loading: false, error: true, data: INITIAL_STATE.data};
        default:
            return state;
    }
};

export default reducer;