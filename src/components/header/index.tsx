import "./styles.css";
import Grid from "@material-ui/core/Grid";
import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import logo from "../../resources/logo.png";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import { Typography } from "@material-ui/core";
import "./styles.css";

const Header = ({ t }: any) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ backgroundColor: "#d9d9d9" }}>
        <Grid container sx={{ display: "flex", margin: "5px" }} className="Bar">
          <Grid item sx={{ flexGrow: 1, justifyContent: "center" }}>
            <img src={logo} alt="logo" className="logo" />
          </Grid>
          <Grid item sx={{ flexGrow: 1, color: "black", margin: 0 }}>
            <Typography variant="h5">CRTNDRDRS</Typography>
          </Grid>
          <Grid
            item
            sx={{ flexGrow: 10, display: "flex", justifyContent: "flex-end" }}
          >
            <Link
              sx={{ color: "black", fontWeight: "bold", padding: "5px" }}
              underline="none"
              onClick={() => scrollTo("company")}
            >
              Nosotros
            </Link>
            <Link
              sx={{ color: "black", fontWeight: "bold", padding: "5px" }}
              underline="none"
              onClick={() => scrollTo("product")}
            >
              Productos
            </Link>
            <Link
              sx={{ color: "black", fontWeight: "bold", padding: "5px" }}
              underline="none"
              onClick={() => scrollTo("contact")}
            >
              Contactanos
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
