import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { DogsC}
import DogsContainer from "./DogsContainer";
import { fetchDogBreeds } from "../../actions";

function mapStateToProps(state) {
    return {
        dogsData: state.dogsData,
        // meData: state.userSession.get('me'),
        // shipmentBoxes: state.shipmentBoxes.get('rows'),
        // packingProcessData: state.packingProcessData,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchDogBreeds,
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DogsContainer);
