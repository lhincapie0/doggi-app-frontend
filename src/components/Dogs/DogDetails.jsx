import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@material-ui/core";
import React from "react";

import PropTypes from 'prop-types';
import ImmutablePropTypes from "react-immutable-proptypes";
function DogDetails({ dog, open, onClose}) {

    return (
        <Dialog open={open} maxWidth="sm" fullWidth>
            <DialogTitle data-testid={`e2e-dog-card-title-${dog.get('id')}`}>
                {'Breed main details'}
            </DialogTitle>
            <DialogContent>
                <Typography style={{ fontWeight: '500' }} data-testid={`e2e-dog-card-name-${dog.get('id')}`}>
                    {`Name: ${dog.get('name') ? dog.get('name') : 'Name was not defined'}`}
                </Typography>
                <Typography  data-testid={`e2e-dog-card-weight-${dog.get('id')}`}>
                    {`Weight: ${dog.get('weight') ? dog.get('weight') : 'Weight was not defined'}`}
                </Typography>
                <Typography data-testid={`e2e-dog-card-height-${dog.get('id')}`}>
                    {`Height: ${dog.get('height') ? dog.get('height') : 'Height was not defined'}`}
                </Typography>
                <Typography data-testid={`e2e-dog-card-life-expectancy-${dog.get('id')}`}>
                    {`Life expectancy: ${dog.get('lifeExpectancy') ? dog.get('lifeExpectancy') : 'Life expectancy was not defined'}`}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button data-testid="e2e-breed-details-close-button" onClick={onClose}>
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
