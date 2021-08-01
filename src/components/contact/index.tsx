import "./index.scss";
import { Box } from "@material-ui/system";
import React from "react";
import { Button } from "@material-ui/core";
import { Grid, Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { MenuItem } from "@material-ui/core";
import { ContactData, ContactInput } from "./types";

const operaciones = [
  {
    label: "Quiero un diseño nuevo",
    value: "design",
  },
  {
    label: "Necesito un pedido de corrugado",
    value: "supply",
  },
  {
    label: "Requiero asesoria sobre modelo",
    value: "assess",
  },
];

class ContactForm extends React.Component<{
  value: String;
  data: ContactInput;
  errorText: boolean;
}> {
  state = {
    value: this.props.value,
    errorText: this.props.errorText,
    data: {
      nombre: this.props.data.nombre,
      apellidos: this.props.data.apellidos,
      email: this.props.data.email,
      operacion: this.props.data.operacion,
      message: this.props.data.message,
    },
  };

  render() {
    return (
        <Grid container className="Contact" id="Contact">
          <Grid item className="Title">
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: "1rem" }}
            >
              Solicita una cotización
            </Typography>
            <Typography variant="h6">
              Puedes enviarnos un mensaje para solicitar información
            </Typography>
          </Grid>
          <Grid item className="Form">
            <Grid item className="nombre">
              <TextField
                id="nombre"
                label="Nombre"
                variant="standard"
                onChange={this.handleInput}
              />
            </Grid>
            <Grid item className="apellidos">
              <TextField
                id="apellidos"
                label="Apellidos"
                variant="standard"
                onChange={this.handleInput}
              />
            </Grid>
            <Grid item className="email">
              <TextField
                id="email"
                label="E-mail"
                variant="standard"
                onChange={this.handleEmail}
                error={this.state.errorText}
                helperText={this.state.errorText ? "Introduce un email valido" : ""}
              />
            </Grid>
            <Grid item className="operacion">
              <TextField
                sx={{}}
                select
                value={this.state.value}
                onChange={this.handleChoice}
                label="¿Que necesitas?"
              >
                {operaciones.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item className="message">
              <TextField
                id="message"
                label="Envianos un mensaje"
                variant="standard"
                onChange={this.handleInput}
              />
            </Grid>
            <Grid item className="send">
              <Button
                variant="contained"
                sx={{ backgroundColor: "#2B2D2F" }}
                endIcon={<SendIcon />}
                onClick={this.handleSubmit}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </Grid>
    );
  }

  handleChoice = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  };

  handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { data } = { ...this.state };
    const currentState: ContactData = data;
    const { id } =  event.target;
    const { value } = event.target;
    currentState[id] = value;
    this.setState({ data: currentState });
  };

   handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    let { data } = this.state;
    let mailData = JSON.stringify(data)
    fetch('https://nu6yu5qv1j.execute-api.us-east-1.amazonaws.com/default/solicitudesCotizacion', {
      method: "POST",
      body: mailData,
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",

      }}).then((response) => {
        console.log('Succeded')
      }).catch((error) => {
        console.log(error)
      })
  };

  handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { data } = { ...this.state };
    const currentState: ContactData = data;
    const { id } =  event.target;
    const { value } = event.target;
    currentState[id] = value;
    const errorText = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)
        ? false
        : true
    if (!errorText) {
    this.setState({ data: currentState, errorText: false });
    } else {
    this.setState({ errorText: true }); 
    }
  }

}

export default ContactForm;
