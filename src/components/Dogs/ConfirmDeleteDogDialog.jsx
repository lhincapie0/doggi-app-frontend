import React from "react";
import PropTypes from 'prop-types';
import {Button, Dialog, DialogActions, DialogTitle} from "@material-ui/core";
import messages from "../../constants/messages";

function ConfirmDeleteDogDialog({ open, onClose, onConfirm }) {
    return (
        <Dialog open={open} >
            <DialogTitle>
                {messages.confirmDelete}
            </DialogTitle>
            <DialogActions>
                <Button data-testid={'cancel-delete-button'} onClick={onClose}>
                    {messages.cancel}
                </Button>
                <Button color='primary' data-testid={'confirm-delete-button'} onClick={onConfirm}>
                    {messages.delete}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

ConfirmDeleteDogDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
}

export default ConfirmDeleteDogDialog;
