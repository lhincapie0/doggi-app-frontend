import { fromJS } from 'immutable';
import ActionType from "../actions/ActionTypes";

const initialState = fromJS({
    rowsLoading: false,
    dogs: [],
    colors: [],
    natures: [],
})

export default function dogsData(state = initialState, action) {
    switch (action.type) {
        case ActionType.TOGGLE_DOGS_DATA_LOADING: {
         return state.set('rowsLoading', !state.get('rowsLoading'));
        }
        case ActionType.RECEIVE_DOGS_DATA: {
            return state
                .set('dogs', fromJS(action.dogs))
                .set('colors', fromJS(action.colors))
                .set('natures', fromJS(action.natures))
        }
        default:
            return state;
    }
}
