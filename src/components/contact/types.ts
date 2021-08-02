export interface operations {
  value: string;
}

export interface ContactInput {
  nombre: string;
  apellidos: string;
  email: string;
  operacion: string;
  message: string;
  value: string;
  [index: string]: any;
}

export interface ContactData {
  [index: string]: any;
}
