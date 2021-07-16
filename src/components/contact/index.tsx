import React from "react";
import { Button } from "@material-ui/core";
import { Grid, Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { ContactComponent } from "./types";
import SendIcon from "@material-ui/icons/Send";
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
        <Grid item className="nombre">
          <TextField
            id="nombre"
            label={contactData.nombre}
            variant="standard"
          />
        </Grid>
        <Grid item className="apellidos">
          <TextField
            id="apellidos"
            label={contactData.apellidos}
            variant="standard"
          />
        </Grid>
        <Grid item className="email">
          <TextField id="email" label={contactData.email} variant="standard" />
        </Grid>
        <Grid item className="operacion">
          <TextField
            id="operacion"
            label={contactData.operacion}
            variant="standard"
          />
        </Grid>
        <Grid item className="message">
          <TextField
            id="message"
            label={contactData.message}
            variant="standard"
          />
        </Grid>
        <Grid item className="send">
          <Button endIcon={<SendIcon />}>Enviar</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
