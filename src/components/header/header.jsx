import React from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  useTheme,
  useMediaQuery,
  Link,
  IconButton,
  Grid,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import DrawerComponent from "../drawer/drawer.jsx";

import { makeStyles } from "@material-ui/core/styles";
import { HistoryEdu, GitHub, LinkedIn, Mail } from "@mui/icons-material";
import CVPdf from "../../assets/img/CDPdf.pdf";
import { grey } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: grey[100],
    fontSize: "20px",

    "&:hover": {
      borderBottom: "1px solid white",
    },
  },
  logo: {
    width: 135,
    height: 43.54,
  },
  iconLink: {
    color: grey[100],

    marginLeft: theme.spacing(1),
  },
  topog: {
    color: grey[100],

    marginLeft: theme.spacing(1),
    "&:hover": { cursor: "default" },
  },
  linkTopog: {
    color: grey[100],

    marginLeft: theme.spacing(1),
  },

  navLink: {
    color: grey[100],
    textDecoration: "none",
    marginLeft: theme.spacing(1),
    "&:hover": { borderBottom: "1px solid white" },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <AppBar
        position="sticky"
        color="primary"
        sx={{ top: 0, bottom: "auto", m: "1", p: "2" }}
      >
        {isMobile ? (
          <>
            <Toolbar>
              <Grid
                container
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                width="100%"
              >
                <DrawerComponent />
                <Grid item>
                  <NavLink
                    to="/about"
                    className={classes.link}
                    sx={{ justifyContent: "center" }}
                  >
                    <Typography
                      className={classes.topog}
                      sx={{ m: "1", p: "2" }}
                      variant="h6"
                    >
                      DG
                    </Typography>
                  </NavLink>
                </Grid>
                <NavLink to="/portfolio" className={classes.link}>
                  <WorkIcon />
                </NavLink>
                <NavLink to="/skills" className={classes.link}>
                  <CodeIcon />
                </NavLink>
              </Grid>
            </Toolbar>
          </>
        ) : (
          <>
            <Toolbar>
              <NavLink
                to="/about"
                className={classes.link}
                sx={{ justifyContent: "center" }}
              >
                <Typography
                  className={classes.topog}
                  sx={{ m: "10", p: "2" }}
                  variant="h6"
                >
                  DG
                </Typography>
              </NavLink>
              <Box
                display="flex"
                sx={{ justifyContent: "space-evenly", alignItems: "center" }}
                width="100%"
                height="100%"
                style={{ p: 1, m: 1 }}
              >
                <NavLink
                  to="/about"
                  className={classes.link}
                  sx={{ justifyContent: "center" }}
                >
                  About
                </NavLink>
                <NavLink to="/portfolio" className={classes.link}>
                  Portfolio
                </NavLink>
                <NavLink to="/skills" className={classes.link}>
                  Skills
                </NavLink>
              </Box>
            </Toolbar>
          </>
        )}
      </AppBar>
    </React.Fragment>
  );
}
