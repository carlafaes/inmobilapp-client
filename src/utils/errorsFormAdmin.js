export const validateFormAdmin = (input) => {
  const errors = {};

  errors.name = !input.name || !/^[A-Za-z\s]+$/g.test(input.name);
  errors.DNI = !input.DNI || !/^[0-9\s]+$/g.test(input.DNI);
  errors.address = !input.address || !/^[A-Za-z0-9\s]+$/g.test(input.address);
  errors.phone = !input.phone || !/^[0-9\s]+$/g.test(input.phone);
  errors.age =
    !input.age ||
    !/^[0-9\s]+$/g.test(input.age) ||
    input.age > 100 ||
    input.age < 1;

  return errors;
};
