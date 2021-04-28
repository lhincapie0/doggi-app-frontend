import ActionType from "./ActionTypes";
import countriesApi from "../client/CountriesApi";

function toggleCountriesLoading() {
    return {
        type: ActionType.TOGGLE_COUNTRIES_LOADING,
    };
}

function receiveCountriesData(countries) {
    return {
        type: ActionType.RECEIVE_COUNTRIES_DATA,
        countries,
    }
}

export function fetchCountries() {
    return async (dispatch) => {
        try {
            dispatch(toggleCountriesLoading());
            const countriesResponse = await countriesApi.getCountries();
            dispatch(receiveCountriesData(countriesResponse.data));
        } catch(error) {
            // TODO HANDLE ERRORS
            console.log('error', error);
        }
        dispatch(toggleCountriesLoading());
    }
}
