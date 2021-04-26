import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DogsContainer from "./DogsContainer";
import { fetchDogBreeds, handleCreateDogBreed} from "../../actions";

function mapStateToProps(state, props) {
    console.log('props', props);
    return {
        ... { dogsData: state.dogsData},
        ...props,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchDogBreeds,
            handleCreateDogBreed,
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DogsContainer);
