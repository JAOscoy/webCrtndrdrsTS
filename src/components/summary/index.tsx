import * as React from "react";
import "./styles.css";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import SimpleSlider from "../../common/carrusel";
import { SummaryComponent } from "./types";

export default function Summary(props: SummaryComponent) {
  const { summaryData } = props;

  return (
    <Grid container className="summary">
      <Grid item className="main">
        <Grid item>
          <Typography
            component="h1"
            variant="h3"
            sx={{ color: "black" }}
            gutterBottom
          >
            {summaryData.title}
          </Typography>
          <Typography
            component="h5"
            color="inherit"
            sx={{ color: "black" }}
            paragraph
          >
            {summaryData.description}
          </Typography>
          <Link variant="subtitle1" sx={{ color: "black" }} href="#">
            {summaryData.linkText}
          </Link>
        </Grid>
      </Grid>
      <Grid item className="carrousel">
        <SimpleSlider />
      </Grid>
    </Grid>
  );
}
