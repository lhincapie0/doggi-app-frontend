import React, { useEffect } from "react";
import PropTypes from 'prop-types';
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
  createDogBreed,
}) {
  const classes = useStyles();

  // const { dogsData } = props;
  const dogs = dogsData.get("dogs");

  useEffect(() => {
    // const { fetchDogBreeds, fetchCountries } = props;
    fetchDogBreeds();
    fetchCountries();
  }, []);

  const dogCards = dogs.map((dog, index) => (
    <DogCard key={`${dog.get("name")}-${dog.get('id')}-card`} index={index} dog={dog} />
  ));

  return (
    <div>
      {dogsData.get("rowsLoading") && (
        <Box>
          <CircularProgress size={500} />
        </Box>
      )}
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {dogCards}
        </Grid>
      </Container>
      <AddDogDialog
        countriesData={countriesData}
        onClose={onCloseAddDialog}
        open={addDialogOpen}
        dogsData={dogsData}
        createDogBreed={createDogBreed}
      />
    </div>
  );
}

DogsContainer.propTypes = {
    dogsData: ImmutablePropTypes.map.isRequired,
    addDialogOpen: PropTypes.bool.isRequired,
    onCloseAddDialog: PropTypes.func.isRequired,
    fetchDogBreeds: PropTypes.func.isRequired,
    fetchCountries: PropTypes.func.isRequired,
    countriesData: ImmutablePropTypes.map.isRequired,
    createDogBreed: PropTypes.func.isRequired,
}
