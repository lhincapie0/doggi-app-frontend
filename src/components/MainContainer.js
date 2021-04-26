import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Authors from "./Authors";
import TopBar from "./TopBar";
import messages from "../constants/messages";
import DogsContainer from "./Dogs/connected";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  mainContentButton: {
    marginTop: theme.spacing(4),
  },
  dogsContainer: {
    paddingBottom: theme.spacing(8),
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function MainContainer() {
  const classes = useStyles();
  const [addDialogOpen, setAddDialogOpen] = useState(false);

  return (
    <React.Fragment>
      <CssBaseline />
      <TopBar />
      <main>
        <div className={classes.mainContent}>
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
            <div className={classes.mainContentButton}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" onClick={() => setAddDialogOpen(true)}>
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
          <DogsContainer addDialogOpen={addDialogOpen} onCloseAddDialog={() => setAddDialogOpen(false)}/>
        </Grid>
      </main>
      <footer className={classes.footer}>
        <Authors />
      </footer>
    </React.Fragment>
  );
}
