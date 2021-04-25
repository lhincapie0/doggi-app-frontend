import React from "react";
import { APP_NAME } from "./constants/config";

export default class Title extends React.Component {
  componentDidMount() {
    window.document.title = APP_NAME;
  }

  render() {
    return null;
  }
}
