import { fromJS } from 'immutable';
import ActionType from "../actions/ActionTypes";

const initialState = fromJS({
    rowsLoading: false,
    dogs: [],
})

export default function dogsData(state = initialState, action) {
    // switch action type...
    switch (action.type) {
        case ActionType.TOGGLE_DOGS_DATA_LOADING: {
         return state.set('rowsLoading', !state.get('rowsLoading'));
        }
        default:
            return state;
    }
}
