import PropTypes from "prop-types";
// TODO MAKE FUNCTION DYNAMIC FOR COLORS AND NATURES
// TODO SEPARATE COMPONENTS IN DIFFERENT FILES
import usePrevious from "../../utils/UsePrevious";
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
}) {
  const [isValid, setIsValid] = useState(false);
  const [country, setCountry] = useState(1);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedNatures, setSelectedNatures] = useState([]);
  const [dogData, setDogData] = useState(DEFAULT_DOG_BREED_STATE);
  const prevOpen = usePrevious(open);

  useEffect(() => {
    if (open && !prevOpen && !breed) {
      resetState();
    }
  }, [open]);

  function resetState() {
    setCountry(1);
    setIsValid(false);
    setSelectedColors([]);
    setSelectedColors([]);
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

    createDogBreed(dogBreedData);
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
              const newState = { ...dogData, ...{ name: value } };
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
              const newState = { ...dogData, ...{ weight: value } };
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
            inputProps={{
              min: 1,
              max: 100,
            }}
            onChange={(event) => {
              const value = event.target.value;
              const newState = { ...dogData, ...{ lifeExpectancy: value } };
              setDogData(newState);
              isValidForm(newState);
            }}
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
          {messages.createDogButtonText}
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
};

export default AddDogDialog;
