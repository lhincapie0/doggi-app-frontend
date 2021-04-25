import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import messages from "../constants/messages";

// const useStyles = makeStyles((theme) => ({
//
//   root: {
//     height: '70px',
//     alignItems: 'center',
//     backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     color: 'white',
//   }
// }));

export default function TopBar() {
  // const classes = useStyles();
  return (
    <div>
      <AppBar position="absolute">
        <Toolbar variant="regular">
          {/*<IconButton*/}
          {/*  edge="start"*/}
          {/*  className={classes.menuButton}*/}
          {/*  color="inherit"*/}
          {/*  aria-label="menu"*/}
          {/*>*/}
          {/*  <MenuIcon />*/}
          {/*</IconButton>*/}
          <Typography variant="h6" color="inherit">
            {messages.welcomeMessage}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
