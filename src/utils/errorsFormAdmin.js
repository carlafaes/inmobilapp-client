export const validateFormAdmin = (input, errors, name) => {
  if (name === "name") {
    return {
      ...errors,
      name: !input.name
        ? "Falta un nombre"
        : !/^[A-Za-z\s]+$/g.test(input.name)
        ? "Solo letras"
        : input.name.length < 5
        ? "Longitud minima 5"
        : null,
    };
  }

  if (name === "dni") {
    return {
      ...errors,
      dni: !input.dni
        ? "Falta el DNI"
        : !/^[0-9\s]+$/g.test(input.dni)
        ? "Solo numeros"
        : input.dni.length < 10
        ? "Longitud minima 10"
        : null,
    };
  }

  if (name === "password" || name === "password1") {
    return {
      ...errors,
      password: !input.password
        ? "Falta contraseña"
        : input.password !== input.password1
        ? "Las contraseñas deben coincidir"
        : input.password.length < 6
        ? "Minimo 6 caracteres"
        : null,
    };
  }

  if (name === "address") {
    return {
      ...errors,
      address: !input.address
        ? null
        : !/^[A-Za-z0-9\s]+$/g.test(input.address)
        ? "Direccion invalida"
        : null,
    };
  }

  if (name === "phone") {
    return {
      ...errors,
      phone: !input.phone
        ? null
        : input.phone.length !== 10
        ? "Numero invalido"
        : null,
    };
  }

  if (name === "age") {
    return {
      ...errors,
      age: !input.age
        ? "Ingresa tu edad"
        : input.age < 18
        ? "Debes ser mayor de edad"
        : input.age > 100
        ? "Edad invalida"
        : null,
    };
  }
};

export const validatePutAdmin = (input) => {
  const errors = {};

  errors.name = !input.name || !/^[A-Za-z\s]+$/g.test(input.name);
  errors.address = !input.address || !/^[A-Za-z0-9\s]+$/g.test(input.address);
  errors.phone = !input.phone || !/^[0-9\s]+$/g.test(input.phone);
  errors.age =
    !input.age ||
    !/^[0-9\s]+$/g.test(input.age) ||
    input.age > 100 ||
    input.age < 1;

  return errors;
};

export const isDone = (error) => {
  return Object.values(error).filter((err) => !!err).length === 0;
};
