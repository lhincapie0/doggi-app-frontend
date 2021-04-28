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

function receiveDogsData(dogs, colors, natures) {
  return {
    type: ActionType.RECEIVE_DOGS_DATA,
    dogs,
    colors,
    natures,
  };
}
export function fetchDogBreeds(reload = true) {
  return async (dispatch) => {
    if (reload) dispatch(toggleDogsLoading());
    try {
      const dogsResponse = await dogsApi.getDogBreeds();
      const colorsResponse = await dogsApi.getDogColors();
      const naturesResponse = await dogsApi.getDogNatures();
      dispatch(
        receiveDogsData(
          dogsResponse.data,
          colorsResponse.data,
          naturesResponse.data
        )
      );
    } catch (error) {
      console.log("fetch failed");
      console.log(error);
      // TODO handle error
    }
    dispatch(toggleDogsLoading());
  };
}

export function createDogBreed(dogBreedData) {
  return async (dispatch) => {
    dispatch(toggleDogsLoading());

    try {
      const dogsResponse = await dogsApi.postDogBreed(dogBreedData);
      console.log(dogsResponse);
      dispatch(fetchDogBreeds(false));
    } catch (error) {
      console.log("error", error);
      dispatch(toggleDogsLoading());
    }
  };
}
