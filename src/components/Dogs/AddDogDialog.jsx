import PropTypes from "prop-types";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Box,
} from "@material-ui/core";
import messages from "../../constants/messages";
import { useState } from "react";
import {
  ADD_DOG_VALIDATION_RULES,
  DOG_BREED_FIELDS,
} from "../../constants/dogBreed";
function AddDogDialog({ createDog, open, onClose }) {
  const [isValid, setIsValid] = useState(false);
  const [dogData, setDogData] = useState({
    name: "",
    weight: 0,
    lifeExpectancy: 0,
    height: 0,
  });

  function isValidForm(newState) {
    const validForm = ADD_DOG_VALIDATION_RULES.reduce((isValid, rule) => {
      if (isValid) {
        const value = newState[rule.field];
        const isValid = rule.type === "number" ? value > 0  && value !== '': value !== '';
        return isValid;
      }
      return isValid;
    }, true);
    setIsValid(validForm);
  }
  return (
    <Dialog open={open} maxWidth="md" fullWidth>
      <DialogTitle>{messages.addDogTitle}</DialogTitle>
      <DialogContent>
        <Box style={{ marginBottom: "30px" }}>
          <TextField
            fullWidth
            autoFocus
            type={"text"}
            label={DOG_BREED_FIELDS.name}
            value={dogData.name}
            onChange={(event) => {
              const value = event.target.value;
              const newState = { ...dogData, ...{ name: value }}
              setDogData(newState);
              isValidForm(newState);
            }}
            data-testid={"e2e-add-dialog-name-field"}
          />
        </Box>
        <Box style={{ marginBottom: "30px" }}>
          <TextField
            fullWidth
            autoFocus
            type={"number"}
            label={DOG_BREED_FIELDS.weight}
            value={dogData.weight}
            onChange={(event) => {
              const value = event.target.value;
              const newState = { ...dogData, ...{ weight: value } }
              setDogData(newState);
              isValidForm(newState);
            }}
            data-testid={"e2e-add-dialog-weight-field"}
          />
        </Box>
        <Box style={{ marginBottom: "30px" }}>
          <TextField
            fullWidth
            autoFocus
            type={"number"}
            label={DOG_BREED_FIELDS.height}
            value={dogData.height}
            onChange={(event) => {
              const value = event.target.value;
              const newState = { ...dogData, ...{ height: value } };
              setDogData(newState);
              isValidForm(newState);
            }}
            data-testid={"e2e-add-dialog-height-field"}
          />
        </Box>
        <Box style={{ marginBottom: "30px" }}>
          <TextField
            fullWidth
            autoFocus
            type={"number"}
            label={DOG_BREED_FIELDS.lifeExpectancy}
            value={dogData.lifeExpectancy}
            onChange={(event) => {
              const value = event.target.value;
              const newState = { ...dogData, ...{ lifeExpectancy: value } }
              setDogData(newState);
              isValidForm(newState);
            }}
            data-testid={"e2e-add-dialog-life-expectancy-field"}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button disabled={!isValid}>Create Animal</Button>
      </DialogActions>
    </Dialog>
  );
}

AddDogDialog.propTypes = {
  createDog: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddDogDialog;
