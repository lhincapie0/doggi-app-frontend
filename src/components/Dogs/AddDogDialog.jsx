import PropTypes from "prop-types";
// TODO MAKE FUNCTION DYNAMIC FOR COLORS AND NATURES
// TODO SEPARATE COMPONENTS IN DIFFERENT FILES
import usePrevious from "../../utils/UsePrevious";
import validateFields from "../../utils/validator";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Select,
  Button,
  TextField,
  Box,
  MenuItem,
  Chip,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import messages from "../../constants/messages";
import { useEffect, useState } from "react";
import {
  ADD_DOG_VALIDATION_RULES,
  DOG_BREED_FIELDS,
  DEFAULT_DOG_BREED_STATE,
  DOG_BREED_FIELDS_KEYS,
  MODE_TYPE,
} from "../../constants/dogBreed";
import ImmutablePropTypes from "react-immutable-proptypes";
import DeleteIcon from "@material-ui/icons/Cancel";

function AddDogDialog({
  createDogBreed,
  open,
  onClose,
  countriesData,
  dogsData,
  breed,
  editDogBreed,
}) {
  const [isValid, setIsValid] = useState(false);
  const [country, setCountry] = useState(1);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedNatures, setSelectedNatures] = useState([]);
  const [dogData, setDogData] = useState(DEFAULT_DOG_BREED_STATE);
  const [validationErrors, setValidationErrors] = useState({});
  const [mode, setMode] = useState(MODE_TYPE.CREATE);
  const prevOpen = usePrevious(open);

  function readValues(breed) {
    const breedData = breed.toJS();
    setMode(MODE_TYPE.EDIT);

    setDogData({
      name: breedData.name,
      lifeExpectancy: breedData.lifeExpectancy,
      height: breedData.height,
      weight: breedData.weight,
    });
    setSelectedColors(breedData.dogBreedColors);
    setSelectedNatures(breedData.dogBreedNatures);
    setCountry(
      countriesData
        .get("countries")
        .find((item) => item.get("name") === breedData.country)
        ?.get("id")
    );
  }

  useEffect(() => {
    if (open && !prevOpen) {
      if (!breed) resetState();
      else readValues(breed);
    }
  }, [open]);

  function resetState() {
    setMode(MODE_TYPE.CREATE);
    setCountry(1);
    setIsValid(false);
    setSelectedColors([]);
    setSelectedNatures([]);
    setValidationErrors({});
    setDogData(DEFAULT_DOG_BREED_STATE);
  }

  function isValidForm(newState) {
    const validForm = ADD_DOG_VALIDATION_RULES.reduce((isValid, rule) => {
      if (isValid) {
        const value = newState[rule.field];
        const isValid =
          rule.type === "number" ? value > 0 && value !== "" : value !== "";
        return isValid;
      }
      return isValid;
    }, true);
    setIsValid(validForm);
  }

  function onCountrySelected(event) {
    const error = validateFields(
      DOG_BREED_FIELDS_KEYS.country,
      event.target.value
    );
    setValidationErrors({ ...validationErrors, ...{ country: error } });
    setCountry(event.target.value);
  }

  const countriesOptions = countriesData.get("countries")?.map((country) => (
    <MenuItem value={country.get("id")} key={country.get("id")}>
      {" "}
      {country.get("name")}
    </MenuItem>
  ));

  function onColorSelected(e, colors) {
    setSelectedColors(colors);
  }

  function onNaturesSelected(e, natures) {
    setSelectedNatures(natures);
  }

  const selectedColorIds = selectedColors.map((selected) => selected.id);
  const selectedNaturesIds = selectedNatures.map((selected) => selected.id);

  const colorsAvailable = dogsData
    .get("colors")
    .filter((color) => !selectedColorIds.includes(color.get("id")))
    .toJS();

  const naturesAvailable = dogsData
    .get("natures")
    .filter((nature) => !selectedNaturesIds.includes(nature.get("id")))
    .toJS();

  const colorOptions = colorsAvailable.map((color) => {
    return { id: color.id, name: color.name };
  });

  const natureOptions = naturesAvailable.map((nature) => {
    return { id: nature.id, name: nature.name };
  });

  function handleOnCreate() {
    const dogBreedData = {
      ...dogData,
      ...{
        idCountry: country,
        country: "",
        dogBreedColors: selectedColors.map((color) => color.id),
        dogBreedNatures: selectedNatures.map((nature) => nature.id),
      },
    };

    if (mode === MODE_TYPE.CREATE) createDogBreed(dogBreedData);
    else editDogBreed(dogBreedData, breed.get("id"));
    onClose();
  }

  const colorsChips = selectedColors.map((color, index) => (
    <Chip
      label={color.name}
      key={color.id}
      deleteIcon={<DeleteIcon />}
      onDelete={() =>
        setSelectedColors(
          selectedColors.filter((colorItem) => colorItem.id !== color.id)
        )
      }
      data-tag-index={index}
    />
  ));

  function onNameChange(event) {
    const value = event.target.value;
    const newState = { ...dogData, ...{ name: value } };
    const error = validateFields(
      DOG_BREED_FIELDS_KEYS.name,
      event.target.value
    );
    setValidationErrors({ ...validationErrors, ...{ name: error } });
    setDogData(newState);
    isValidForm(newState);
  }

  function onWeightChange(event) {
    const value = event.target.value;
    const newState = { ...dogData, ...{ weight: value } };
    setDogData(newState);
    const error = validateFields(
      DOG_BREED_FIELDS_KEYS.weight,
      event.target.value
    );
    setValidationErrors({ ...validationErrors, ...{ weight: error } });
    isValidForm(newState);
  }

  function onHeightChange(event) {
    const value = event.target.value;
    const newState = { ...dogData, ...{ height: value } };
    const error = validateFields(
      DOG_BREED_FIELDS_KEYS.height,
      event.target.value
    );
    setValidationErrors({ ...validationErrors, ...{ height: error } });
    setDogData(newState);
    isValidForm(newState);
  }

  function onLifeExpectancyChange(event) {
    const value = event.target.value;
    const newState = { ...dogData, ...{ lifeExpectancy: value } };
    const error = validateFields(
      DOG_BREED_FIELDS_KEYS.lifeExpectancy,
      event.target.value
    );
    setValidationErrors({ ...validationErrors, ...{ lifeExpectancy: error } });
    setDogData(newState);
    isValidForm(newState);
  }

  const naturesChips = selectedNatures.map((nature, index) => (
    <Chip
      label={nature.name}
      key={nature.id}
      deleteIcon={<DeleteIcon />}
      onDelete={() =>
        setSelectedNatures(
          selectedNatures.filter((natureItem) => natureItem.id !== nature.id)
        )
      }
      data-tag-index={index}
    />
  ));

  return (
    <Dialog open={open} maxWidth="md" fullWidth>
      <DialogTitle>
        {mode === MODE_TYPE.CREATE
          ? messages.addDogTitle
          : messages.editDogTitle}
      </DialogTitle>
      <DialogContent>
        <Box style={{ marginBottom: "30px" }}>
          <TextField
            fullWidth
            autoFocus
            type={"text"}
            label={DOG_BREED_FIELDS.name}
            value={dogData.name}
            onChange={(event) => onNameChange(event)}
            errors={validationErrors[DOG_BREED_FIELDS_KEYS.name]}
            helperText={validationErrors[DOG_BREED_FIELDS_KEYS.name]}
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
            onChange={(event) => onWeightChange(event)}
            data-testid={"e2e-add-dialog-weight-field"}
            errors={validationErrors[DOG_BREED_FIELDS_KEYS.weight]}
            helperText={validationErrors[DOG_BREED_FIELDS_KEYS.weight]}
          />
        </Box>
        <Box style={{ marginBottom: "30px" }}>
          <TextField
            fullWidth
            autoFocus
            type={"number"}
            label={DOG_BREED_FIELDS.height}
            value={dogData.height}
            onChange={(event) => onHeightChange(event)}
            errors={validationErrors[DOG_BREED_FIELDS_KEYS.height]}
            helperText={validationErrors[DOG_BREED_FIELDS_KEYS.height]}
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
            inputProps={{
              min: 1,
              max: 100,
            }}
            errors={validationErrors[DOG_BREED_FIELDS_KEYS.lifeExpectancy]}
            helperText={validationErrors[DOG_BREED_FIELDS_KEYS.lifeExpectancy]}
            onChange={(event) => onLifeExpectancyChange(event)}
            data-testid={"e2e-add-dialog-life-expectancy-field"}
          />
        </Box>
        <Select
          labelId="type-select-placeholder"
          fullWidth
          value={country}
          onChange={onCountrySelected}
          MenuProps={{
            anchorOrigin: {
              vertical: "top",
              horizontal: "center",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "center",
            },
            getContentAnchorEl: null,
            MenuListProps: {
              id: "e2e-integrator-client-type",
            },
          }}
        >
          {countriesOptions}
        </Select>
        <Box>
          <Box style={{ marginTop: "10px" }}>{colorsChips}</Box>
          <Autocomplete
            multiple
            onChange={onColorSelected}
            value={selectedColors}
            renderInput={(params) => (
              <TextField {...params} label={messages.colorsTitle} />
            )}
            renderTags={() => {}}
            options={colorOptions}
            getOptionLabel={(option) => option.name}
          />
        </Box>
        <Box>
          <Box style={{ marginTop: "10px" }}>{naturesChips}</Box>
          <Autocomplete
            multiple
            onChange={onNaturesSelected}
            value={selectedNatures}
            renderInput={(params) => (
              <TextField {...params} label={messages.naturesTitle} />
            )}
            renderTags={() => {}}
            options={natureOptions}
            getOptionLabel={(option) => option.name}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleOnCreate} disabled={!isValid}>
          {mode === MODE_TYPE.CREATE
            ? messages.createDogButtonText
            : messages.editDogButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

AddDogDialog.propTypes = {
  createDogBreed: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  countriesData: ImmutablePropTypes.map.isRequired,
  dogsData: ImmutablePropTypes.map.isRequired,
  breed: ImmutablePropTypes.map,
  editDogBreed: PropTypes.func.isRequired,
};

export default AddDogDialog;
