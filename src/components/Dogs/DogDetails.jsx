import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@material-ui/core";
import React from "react";

import PropTypes from 'prop-types';
import ImmutablePropTypes from "react-immutable-proptypes";
function DogDetails({ dog, open, onClose}) {

    return (
        <Dialog open={open} maxWidth="sm" fullWidth>
            <DialogTitle>
                {'Breed main details'}
            </DialogTitle>
            <DialogContent>
                <Typography style={{ fontWeight: '500' }}>
                    {`Name: ${dog.get('name') ? dog.get('name') : 'Name was not defined'}`}
                </Typography>
                <Typography>
                    {`Weight: ${dog.get('weight') ? dog.get('weight') : 'Weight was not defined'}`}
                </Typography>
                <Typography>
                    {`Height: ${dog.get('height') ? dog.get('height') : 'Height was not defined'}`}
                </Typography>
                <Typography>
                    {`Life expectancy: ${dog.get('lifeExpectancy') ? dog.get('lifeExpectancy') : 'Life expectancy defined'}`}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DogDetails;

DogDetails.propTypes = {
    dog: ImmutablePropTypes.map.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,

}
