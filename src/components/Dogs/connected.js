import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DogsContainer from "./DogsContainer";
import { fetchDogBreeds, handleCreateDogBreed, fetchCountries } from "../../actions";

function mapStateToProps(state, props) {
    console.log('props', props);
    return {
        ... { dogsData: state.dogsData, countriesData: state.countriesData},
        ...props,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchDogBreeds,
            handleCreateDogBreed,
            fetchCountries,
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DogsContainer);
