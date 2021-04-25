import { CssBaseline, Grid, Typography } from "@material-ui/core";
import messages from "./constants/messages";
import { Provider } from "react-redux";
import store from "./store";
import React from "react";
import TopBar from "./components/TopBar";
import Authors from "./components/Authors";
function App() {
  return (
    <Provider store={store}>
      <CssBaseline>
        <TopBar />
        <main>
          <Grid>
            <Typography>{messages.welcomeMessage}</Typography>
          </Grid>
        </main>
        <footer>
          <Authors />
        </footer>
      </CssBaseline>
    </Provider>
  );
}

export default App;
