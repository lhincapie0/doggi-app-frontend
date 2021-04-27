
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

// import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Typography, Box, CircularProgress} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import {fetchDogBreeds} from "../../actions";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function DogsContainer(props) {
    const classes = useStyles();

    const { dogsData } = props;

    useEffect(() => {
        const { fetchDogBreeds } = props;
        fetchDogBreeds();
    }, [])

    console.log('HOLAAAA');
    console.log('loading:', dogsData.get('rowsLoading'));

    return (
        <div>
            {dogsData.get('rowsLoading') &&
            <Box>
                <CircularProgress size={500} />
            </Box>}
            <p>{'here its going to be dogs information'}</p>
        </div>
    );
}
