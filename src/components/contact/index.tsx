import "./index.scss";
import { Box } from "@material-ui/system";
import React from "react";
import { Button } from "@material-ui/core";
import { Grid, Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { MenuItem } from "@material-ui/core";
import { ContactData, ContactInput } from "./types";
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha"


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

const captchaKey: any = process.env.REACT_APP_CKEY

class ContactForm extends React.Component<{
  value: String;
  data: ContactInput;
  errorText: boolean;
  isHuman: boolean;
}> {
  state = {
    isHuman: this.props.isHuman,
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
        <Box className="contact" id="contact">
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
                label="apellidos"
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
            <Grid item className="mensaje">
              <TextField
                id="mensaje"
                label="Envianos un mensaje"
                variant="standard"
                onChange={this.handleInput}
              />
            </Grid>
            <Grid container className="send" sx={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gridTemplateRows: '1fr', justifyContent:'start'}}>
              <Grid item sx={{ width: 'fit-content'}}>
              <ReCAPTCHA
                sitekey={captchaKey}
                onChange={this.humanVerifying}
                >
                </ReCAPTCHA>
              </Grid>
              <Grid item>
              <Button
              sx = {{ backgroundColor: '#2B2D2F'}}
                variant="contained"
                endIcon={<SendIcon />}
                onClick={this.handleSubmit}
              >
                Enviar
              </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
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
    const { data } = this.state;
    const mailData = JSON.stringify(data)
    console.log(mailData)
    const apiURL: any = process.env.REACT_APP_API_URL
    if (this.state.isHuman) {
    axios.post(apiURL, mailData).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })} else {
        alert('Verifica que no eres un robot')
      }
  };

  humanVerifying = (response: any) => {
    if (response) {
      this.setState({isHuman: true})
    } else {
      this.setState({isHuman: false})
    }
  }

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
