import { CssBaseline, Grid, Typography } from "@material-ui/core";
import messages from "./constants/messages";
import { Provider } from "react-redux";
import store from "./store";
import React, {useEffect} from "react";
import TopBar from "./components/TopBar";
import Authors from "./components/Authors";
import DogsContainer from "./components/Dogs/DogsContainer";
import MainContainer from "./components/MainContainer";

function App() {

  useEffect(() => {
    console.log('should fetch somethig...');
  })

  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
}

export default App;
