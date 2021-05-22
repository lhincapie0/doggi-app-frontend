import { Provider } from "react-redux";
import store from "./store";
import React, {useEffect} from "react";
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
