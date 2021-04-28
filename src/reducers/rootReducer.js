import { combineReducers } from 'redux';

import dogsData from "./dogsData";
import countriesData from "./countriesData";

const rootReducer = combineReducers({
    dogsData,
    countriesData,
})

export default rootReducer;
