import { combineReducers } from "redux";
import repositories from "./repositories"
import addresses from "./addresses"

export default combineReducers({
    repositories,
    addresses
});