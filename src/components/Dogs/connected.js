import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DogsContainer from "./DogsContainer";
import { fetchDogBreeds, createDogBreed, fetchCountries, editDogBreed } from "../../actions";

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
            editDogBreed,
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DogsContainer);
