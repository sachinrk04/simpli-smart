import React from "react";
import {
  AppBar,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./MainHeader.scss";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function MainHeader(props) {
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Link className="header-link" to="/">
              <Typography variant="h6" component="div">
                SimpliSmart
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
