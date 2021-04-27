/**
 * Toggle dogs loading
 * @returns {object} Redux payload with type='TOGGLE_DOGS_DATA_LOADING'
 */
import ActionType from "./ActionTypes";
import dogsApi from "../client/DogsApi";

export function toggleDogsLoading() {
    return {
        type: ActionType.TOGGLE_DOGS_DATA_LOADING,
    };
}
export function fetchDogBreeds() {
    return async (dispatch) => {
        dispatch(toggleDogsLoading());
        try {
            const dogsResponse = await dogsApi.getDogBreeds();
            console.log('DOGS DATAAAAAA');
            console.log('dogs data', dogsResponse)
        } catch(error) {
            console.log('fetch failed');
            console.log(error);
        }
        dispatch(toggleDogsLoading());

    }
//     return async (dispatch) => {
//     try {
//       dispatch(togglePackingProcessLoading());
//
//       const packingOrderResponse = await packingApi.postFinishPacking(packingOrderId);
//       dispatch(receivePackingProcessPackingOrder(packingOrderResponse.data));
//
//       const labelAttachmentsCount = countLabelAttachments(packingBoxes.toJS());
//
//       if (packingBoxes.size !== labelAttachmentsCount)
//         dispatch(toggleWaitingForLabels(true));
//     } catch (error) {
//       const errorLabel = i18nMessage('global.errorMessage');
//       dispatch(receivePackingProcessErrorMessage(errorLabel));
//     }
//     dispatch(togglePackingProcessLoading());
//   };
}
