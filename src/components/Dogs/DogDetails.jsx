import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@material-ui/core";
import React from "react";

import PropTypes from 'prop-types';
import ImmutablePropTypes from "react-immutable-proptypes";
function DogDetails({ dog, open, onClose}) {

    return (
        <Dialog open={open} maxWidth="sm" fullWidth>
            <DialogTitle>
                {'Breed details'}
            </DialogTitle>
            <DialogContent>
                <Typography style={{ fontWeight: '500' }}>
                    {`Name: ${dog.get('name')}`}
                </Typography>
                <Typography>
                    {`Width: ${dog.get('width')}`}
                </Typography>
                <Typography>
                    {`Height: ${dog.get('height')}`}
                </Typography>
                <Typography>
                    {`Life expectancy: ${dog.get('Life expectancy')}`}
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
