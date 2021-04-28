import keymirror from 'keymirror';

const ActionType = keymirror(
    {
        TOGGLE_DOGS_DATA_LOADING: null,
        RECEIVE_DOGS_DATA: null,
        RECEIVE_COUNTRIES_DATA: null,
        TOGGLE_COUNTRIES_LOADING: null,
    }
)
export default ActionType;
