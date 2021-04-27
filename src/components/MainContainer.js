import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Authors from "./Authors";
import TopBar from "./TopBar";
import { Fab } from "@material-ui/core";
import messages from "../constants/messages";
import DogsContainer from "./Dogs/connected";

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
  dogsContainer: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function MainContainer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <TopBar />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              {messages.appTitle}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              {messages.appDescription}
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                      {messages.addDogButton}
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.dogsContainer}
          maxWidth={"xl"}
        >
          <DogsContainer />
        </Grid>
        {/*<Grid className={classes.dogsContainer}           justify="rigth"*/}
        {/*      alignItems="right" maxWidth={"xl"}>*/}
        {/*  <Fab color="primary" aria-label="add">*/}
        {/*    <AddIcon />*/}
        {/*  </Fab>*/}
        {/*</Grid>*/}
      </main>
      <footer className={classes.footer}>
        <Authors />
      </footer>
    </React.Fragment>
  );
}
