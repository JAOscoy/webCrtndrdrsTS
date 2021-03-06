import "./index.scss";
import Grid from "@material-ui/core/Grid";
import { CompanyComponent } from "./types";
import { Typography } from "@material-ui/core";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import TrendingUp from "@material-ui/icons/TrendingUp";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import ExtensionIcon from "@material-ui/icons/Extension";
import { Box } from "@material-ui/core";

export default function Company(props: CompanyComponent) {
  const { companyData } = props;

  return (
    <Box className="companyBox" id="company">
      <Typography
        variant="h5"
        sx={{ color: "white", paddingTop: "3rem", fontWeight: "bold" }}
      >
        {companyData.title}
      </Typography>
      <Grid container className="companyItems">
        <Grid item className="about">
          <ExtensionIcon sx={{ fontSize: "150px", color: "#AD8762"}} />
          <Typography component="p" sx={{ color: "white", fontWeight: "bold" }}>
            {companyData.mision}
          </Typography>
        </Grid>
        <Grid item className="about">
          <LocalAtmIcon sx={{ fontSize: "150px", color: "#AD8762"}} />
          <Typography component="p" sx={{ color: "white", fontWeight: "bold" }}>
            {companyData.vision}
          </Typography>
        </Grid>
        <Grid item className="about">
          <TrendingUp sx={{ fontSize: "150px", color: "#AD8762"}} />
          <Typography component="p" sx={{ color: "white", fontWeight: "bold" }}>
            {companyData.experience}
          </Typography>
        </Grid>
        <Grid item className="about">
          <WatchLaterIcon sx={{ fontSize: "150px", color: "#AD8762" }} />
          <Typography component="p" sx={{ color: "white", fontWeight: "bold" }}>
            {companyData.financial}
          </Typography>
        </Grid>
        <Grid item className="about">
          <LocalShippingIcon sx={{ fontSize: "150px", color: "#AD8762" }} />
          <Typography component="p" sx={{ color: "white", fontWeight: "bold" }}>
            {companyData.quality}
          </Typography>
        </Grid>
        <Grid item className="about">
          <Typography
            component="p"
            sx={{
              fontWeight: "bold",
              fontSize: "100px",
              color: "#AD8762",
            }}
          >
            QA
          </Typography>
          <Typography component="p" sx={{ color: "white", fontWeight: "bold" }}>
            {companyData.flexibility}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
