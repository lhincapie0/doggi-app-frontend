import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, CircularProgress, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DogCard from "./DogCard";
import AddDogDialog from "./AddDogDialog";
import ImmutablePropTypes from "react-immutable-proptypes";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function DogsContainer({
  dogsData,
  addDialogOpen,
  onCloseAddDialog,
  fetchDogBreeds,
  fetchCountries,
  countriesData,
  openDialog,
  createDogBreed,
  editDogBreed,
}) {
  const classes = useStyles();
  const [currentDogBreedDetails, setCurrentDogBreedDetails] = useState(null);
  const dogs = dogsData.get("dogs");

  function openDogDetails(dog) {
    setCurrentDogBreedDetails(dog);
    openDialog();
  }

  useEffect(() => {
    // const { fetchDogBreeds, fetchCountries } = props;
    fetchDogBreeds();
    fetchCountries();
  }, []);

  const dogCards = dogs.map((dog, index) => (
    <DogCard
      key={`${dog.get("name")}-${dog.get("id")}-card`}
      index={index}
      dog={dog}
      openDetails={openDogDetails}
    />
  ));

  function onClose() {
    setCurrentDogBreedDetails(null);
    onCloseAddDialog();
  }

  return (
    <div>
      {dogsData.get("rowsLoading") && (
        <Box>
          <CircularProgress size={500} />
        </Box>
      )}
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {dogCards}
        </Grid>
      </Container>
      <AddDogDialog
        countriesData={countriesData}
        onClose={onClose}
        open={addDialogOpen}
        dogsData={dogsData}
        createDogBreed={createDogBreed}
        breed={currentDogBreedDetails}
        editDogBreed={editDogBreed}
      />
    </div>
  );
}

DogsContainer.propTypes = {
  dogsData: ImmutablePropTypes.map.isRequired,
  openDialog: PropTypes.func.isRequired,
  addDialogOpen: PropTypes.bool.isRequired,
  onCloseAddDialog: PropTypes.func.isRequired,
  fetchDogBreeds: PropTypes.func.isRequired,
  fetchCountries: PropTypes.func.isRequired,
  countriesData: ImmutablePropTypes.map.isRequired,
  createDogBreed: PropTypes.func.isRequired,
  editDogBreed: PropTypes.func.isRequired,
};
