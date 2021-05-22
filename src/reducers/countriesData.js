import { fromJS } from 'immutable';
import ActionType from "../actions/ActionTypes";

const initialState = fromJS({
    countriesLoading: false,
    countries: [],
})

export default function countriesData(state = initialState, action) {
    switch (action.type) {
        case ActionType.TOGGLE_COUNTRIES_LOADING: {
            return state.set('countriesLoading', !state.get('countriesLoading'));
        }
        case ActionType.RECEIVE_COUNTRIES_DATA: {
            return state.set('countries', fromJS(action.countries))
        }
        default:
            return state;
    }
}
