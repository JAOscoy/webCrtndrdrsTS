import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { ContactComponent } from "./types";
import "./styles.scss";

export default function Contact(props: ContactComponent) {
  const [operation, setOperation] = React.useState("0");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOperation(event.target.value);
  };
  const { contactData } = props;
  return (
    <Grid container className="Contact">
      <Grid item className="Title">
        <Typography variant="h6">{contactData.title}</Typography>
        <Typography>{contactData.description}</Typography>
      </Grid>
      <Grid item className="Form">
        <TextField id="nombre" label={contactData.nombre} variant="standard" />
        <TextField
          id="apellidos"
          label={contactData.apellidos}
          variant="standard"
        />
        <TextField id="email" label={contactData.email} variant="standard" />
        <TextField
          id="operacion"
          label={contactData.operacion}
          variant="standard"
        />
        <TextField
          id="message"
          label={contactData.message}
          variant="standard"
        />
      </Grid>
    </Grid>
  );
}
