
import React, {useEffect} from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Grid from '@material-ui/core/Grid';

import {
    Box,
    CircularProgress,
    Container,
    Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DogCard from "./DogCard";
import AddDogDialog from "./AddDogDialog";
import {fetchCountries} from "../../actions";

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
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

export default function DogsContainer(props) {
    const classes = useStyles();

    const { dogsData } = props;
    const dogs = dogsData.get('dogs');

    useEffect(() => {
        const { fetchDogBreeds, fetchCountries } = props;
        fetchDogBreeds();
        fetchCountries();
    }, [])


    const dogCards = dogs.map((dog, index) => <DogCard key={dog.get('name')} index={index} dog={dog} />);

    return (
        <div>
            {dogsData.get('rowsLoading') &&
            <Box>
                <CircularProgress size={500} />
            </Box>}
            <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {dogCards}
                </Grid>
            </Container>
            <AddDogDialog
                countriesData={props.countriesData}
                onClose={props.onCloseAddDialog}
                open={props.addDialogOpen}
                dogsData={props.dogsData}
                createDog={props.handleCreateDogBreed}
            />
        </div>
    );
}
