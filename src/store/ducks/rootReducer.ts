import { combineReducers } from "redux";
import repositories from "./repositories"
import addresses from "./addresses"
import aulas from "./aulas"

export default combineReducers({
    repositories,
    addresses,
    aulas
});