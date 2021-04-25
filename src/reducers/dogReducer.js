import { fromJS } from 'immutable';

const initialState = fromJS({
    rowsLoading: false,
    dogsData: [],
})

export default function dogReducer(state = initialState, action) {
    // switch action type...
    return state;
}
