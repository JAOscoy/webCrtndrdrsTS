import * as React from "react";
import "./styles.scss";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { ProductComponent } from "./types";
import Spec from "../../common/spec";

export default function Products(props: ProductComponent) {
  const { productData } = props;

  return (
    <Grid container className="Products">
      <Grid item className="Tittle">
        <Typography variant="h5">{productData.title}</Typography>
        <Typography variant="h6">{productData.description}</Typography>
      </Grid>
      <Grid item className="Tabs">
        <Spec />
      </Grid>
    </Grid>
  );
}
