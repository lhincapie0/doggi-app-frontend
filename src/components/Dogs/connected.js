import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DogsContainer from "./DogsContainer";
import { fetchDogBreeds, createDogBreed, fetchCountries } from "../../actions";

function mapStateToProps(state, props) {
    return {
        ... { dogsData: state.dogsData, countriesData: state.countriesData },
        ...props,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchDogBreeds,
            createDogBreed,
            fetchCountries,
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DogsContainer);
