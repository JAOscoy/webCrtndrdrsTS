interface operations {
  value: string;
  label: string;
}

export interface ContactComponent {
  contactData: {
    title: string;
    description: string;
    nombre: string;
    apellidos: string;
    email: string;
    operaciones: Array<operations>;
    message: string;
  };
}
