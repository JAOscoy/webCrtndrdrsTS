import * as React from "react";
import "./styles.css";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import SimpleSlider from "../../common/list";
import { SummaryComponent } from "./types";
import { Button } from "@material-ui/core";

export default function Summary(props: SummaryComponent) {
  const { summaryData } = props;
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

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
          <Button variant="contained">
            <Link
              variant="subtitle1"
              underline="none"
              sx={{ color: "white", fontWeight: "bold" }}
              onClick={() => scrollTo("contact")}
            >
              {summaryData.linkText}
            </Link>
          </Button>
        </Grid>
      </Grid>
      <Grid item className="carrousel">
        <SimpleSlider />
      </Grid>
    </Grid>
  );
}
