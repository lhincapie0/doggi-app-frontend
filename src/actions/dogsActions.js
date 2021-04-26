/**
 * Toggle dogs loading
 * @returns {object} Redux payload with type='TOGGLE_DOGS_DATA_LOADING'
 */
import ActionType from "./ActionTypes";
import dogsApi from "../client/DogsApi";

function toggleDogsLoading() {
    return {
        type: ActionType.TOGGLE_DOGS_DATA_LOADING,
    };
}

function receiveDogsData(dogs) {
    return {
        type: ActionType.RECEIVE_DOGS_DATA,
        dogs,
    };
}
export function fetchDogBreeds() {
    return async (dispatch) => {
        dispatch(toggleDogsLoading());
        try {
            const dogsResponse = await dogsApi.getDogBreeds();
            dispatch(receiveDogsData(dogsResponse.data));
        } catch(error) {
            console.log('fetch failed');
            console.log(error);
            // TODO handle error
        }
        dispatch(toggleDogsLoading());

    }
}

export function handleCreateDogBreed(dogBreedData) {
    console.log('should create new dog');
}
