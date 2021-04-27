import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import messages from "../constants/messages";


export default function TopBar() {
  return (
      <AppBar position="relative">
          <Toolbar>
              <Typography variant="h6" color="inherit" noWrap>
                  {messages.welcomeMessage}
              </Typography>
          </Toolbar>
      </AppBar>
    // <div>
    //   <AppBar position="absolute">
    //     <Toolbar variant="regular">
    //       {/*<IconButton*/}
    //       {/*  edge="start"*/}
    //       {/*  className={classes.menuButton}*/}
    //       {/*  color="inherit"*/}
    //       {/*  aria-label="menu"*/}
    //       {/*>*/}
    //       {/*  <MenuIcon />*/}
    //       {/*</IconButton>*/}
    //       <Typography variant="h6" color="inherit">
    //         {messages.welcomeMessage}
    //       </Typography>
    //     </Toolbar>
    //   </AppBar>
    // </div>
  );
}
