import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assests/shopping.png";
import useStyles from "./styles";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <>
      <AppBar position="fixed" color="inherit" classes={classes.appBar}>
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            color="inherit"
            component={Link}
            to="/"
          >
            <img
              src={logo}
              alt="E-Commerce"
              height="25px"
              className={classes.image}
            />
            E-Commerce
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Shopping Cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
