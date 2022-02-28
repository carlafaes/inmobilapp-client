import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import styles from "./CreateProperty.module.css";
import propertyServices from "../../services/property";
import { isValidURL } from "../../utils/validurl";
import FormImages from "../FormImages/FormImages";
import { useNavigate, useParams } from "react-router-dom";
import { notifySuccess, notifyError } from "../../utils/notifications";

export default function CreatePropertyForm() {
  const [newProperty, setNewProperty] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [images, setNewImage] = useState([]);
  const { agentID } = useParams();

  const navigate = useNavigate();

  function onClickHandler(image) {
    if (isValidURL(image)) {
      setNewImage([...images, image]);
    } else {
      notifyError("URL invalida!");
    }
  }
  return (
    <Formik
      className={styles.formik}
      initialValues={{
        type: "",
        city: "",
        neighborhood: "",
        address: "",
        images: "",
        price: "",
        description: "",
        area: "",
        rooms: "",
        baths: "",
        garage: "",
      }}
      validate={(v) => {
        const err = {};
        if (!v.type) {
          err.type = "Debes elegir un tipo de inmueble";
        }

        if (!v.city) {
          err.city = "Debes ingresar una ciudad";
        }

        if (!v.neighborhood) {
          err.neighborhood = "Debes ingresar un barrio";
        }

        if (!v.address) {
          err.address = "Debes ingresar una dirección";
        }

        if (!v.images) {
          err.images = "necesitas agregar imagenes";
        } else if (!isValidURL(v.images)) {
          err.images = "Debes ingresar una URL valida";
        } else if (images.length < 4) {
          err.images = "Debes agregar al menos 4 imagenes";
        }

        if (!v.price) {
          err.price = "Debes ingresar un precio";
        } else if (!/^\d+$/.test(v.price)) {
          err.price = "Unciamente se aceptan números en este campo";
        } else if (!(v.price >= 200 && v.price <= 2000)) {
          err.price = "El precio debe estar entre 200 y 2000 dolares";
        }

        if (!v.description) {
          err.description = "Debes ingresar una descripción";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,2000}$/.test(v.description)) {
          err.description =
            "Solo se aceptan letras, espacios y guiones en este campo";
        } else if (v.description.length < 11) {
          err.description = "La descripción debe tener más de diez caracteres";
        }

        if (!v.area) {
          err.area = "Debes ingresar un area";
        } else if (!/^\d+$/.test(v.area)) {
          err.area = "Unicamente se aceptan números en este campo";
        }

        if (!v.rooms) {
          err.rooms = "Debes ingresar un area";
        } else if (!/^\d+$/.test(v.rooms)) {
          err.rooms = "Unicamente se aceptan números en este campo";
        } else if (!(v.rooms > 0 && v.rooms <= 20)) {
          err.rooms =
            "El número de habitaciones debe ser mayor a 0 y máximo 20";
        }

        if (!v.baths) {
          err.baths = "Debes ingresar un número de baños";
        } else if (!/^\d+$/.test(v.baths)) {
          err.baths = "Unicamente se aceptan números en este campo";
        }

        if (!v.garage) {
          err.garage = "Debes elegir una opción";
        }

        setFormErrors(err);
        return err;
      }}
      onSubmit={(values, { resetForm }) => {
        /* resetForm(); */
        if (
          !formErrors.type &&
          !formErrors.city &&
          !formErrors.neighborhood &&
          !formErrors.address &&
          !formErrors.price &&
          !formErrors.description &&
          !formErrors.area &&
          !formErrors.rooms &&
          !formErrors.baths &&
          !formErrors.garage &&
          !formErrors.images
        ) {
          const property = {
            typeProperty: values.type,
            location: {
              city: values.city,
              neighborhood: values.neighborhood,
              address: values.address,
            },
            images: images,
            rentalPrice: values.price,
            description: values.description,
            details: {
              area: values.area,
              rooms: values.rooms,
              baths: values.baths,
              garage: values.garage === "false" ? false : true,
            },
            agentID,
          };
          propertyServices
            .createProperty(property)
            .then(() => {
              notifySuccess("Propiedad creada");
              setTimeout(() => navigate("/"), 2000);
            })
            .catch((err) => notifyError(err.message));
          setNewImage([]);
        } else {
          notifyError("Llene correctamente el formulario!");
        }
      }}
    >
      {({ errors, values }) => (
        <Form className={styles.form}>
          <div className={styles.container}>
            <section className={styles.section}>
              <h2 className={styles.title}>Ubicación</h2>
              <div className={styles.input_container}>
                <label className={styles.label} htmlFor="type">
                  Tipo de propiedad
                </label>
                <Field
                  className={errors.type ? styles.error : styles.field}
                  name="type"
                  as="select"
                >
                  <option name="type" value="tipo" selected={true}>
                    Tipo
                  </option>
                  <option name="type" value="casa">
                    Casa
                  </option>
                  <option name="type" value="apartamento">
                    Apartamento
                  </option>
                  <option name="type" value="local">
                    Local
                  </option>
                </Field>
                <ErrorMessage
                  name="type"
                  component={() => (
                    <p className={styles.wrong}>{errors.type}</p>
                  )}
                />
              </div>
              <label className={styles.label} htmlFor="city">
                Ciudad
              </label>
              <div>
                <Field
                  className={errors.city ? styles.error : styles.field}
                  name="city"
                  type="text"
                />
                <ErrorMessage
                  name="city"
                  component={() => (
                    <p className={styles.wrong}>{errors.city}</p>
                  )}
                />
              </div>
              <label className={styles.label} htmlFor="neighborhood">
                Barrio
              </label>
              <div>
                <Field
                  className={errors.neighborhood ? styles.error : styles.field}
                  name="neighborhood"
                  type="text"
                />
                <ErrorMessage
                  name="neighborhood"
                  component={() => (
                    <p className={styles.wrong}>{errors.neighborhood}</p>
                  )}
                />
              </div>
              <label className={styles.label} htmlFor="address">
                Dirección
              </label>
              <div>
                <Field
                  className={errors.address ? styles.error : styles.field}
                  name="address"
                  type="text"
                />
                <ErrorMessage
                  name="address"
                  component={() => (
                    <p className={styles.wrong}>{errors.address}</p>
                  )}
                />
              </div>
            </section>
            <section className={styles.section}>
              <h2 className={styles.title}>Detalles</h2>
              <label className={styles.label} htmlFor="images">
                Imagenes
              </label>
              <div>
                <div className={styles.image_input_container}>
                  <Field
                    className={errors.images ? styles.error : styles.field}
                    name="images"
                    type="text"
                  />
                  <button
                    type="button"
                    className={styles.image_button}
                    onClick={() => onClickHandler(values.images)}
                  >
                    Agregar
                  </button>
                </div>
                <ErrorMessage
                  name="images"
                  component={() => (
                    <p className={styles.wrong}>{errors.images}</p>
                  )}
                />
                <div className={styles.images_container}>
                  {images.length
                    ? images.map((im, i) => <FormImages key={i} image={im} />)
                    : null}
                </div>
              </div>
              <label className={styles.label} htmlFor="price">
                Precio
              </label>
              <div>
                <Field
                  className={errors.price ? styles.error : styles.field}
                  name="price"
                  type="text"
                />
                <ErrorMessage
                  name="price"
                  component={() => (
                    <p className={styles.wrong}>{errors.price}</p>
                  )}
                />
              </div>
              <label className={styles.label} htmlFor="description">
                Descripción
              </label>
              <div className={styles.input_container}>
                <Field
                  className={
                    errors.description
                      ? styles.field_text_area_error
                      : styles.field_text_area
                  }
                  name="description"
                  as="textarea"
                />
                <ErrorMessage
                  name="description"
                  component={() => (
                    <p className={styles.wrong}>{errors.description}</p>
                  )}
                />
              </div>
            </section>
            <section className={styles.section}>
              <h2 className={styles.title}>Detalles</h2>
              <label className={styles.label} htmlFor="">
                Area
              </label>
              <div>
                <Field
                  className={errors.area ? styles.error : styles.field}
                  name="area"
                  type="text"
                />
                <ErrorMessage
                  name="area"
                  component={() => (
                    <p className={styles.wrong}>{errors.area}</p>
                  )}
                />
              </div>
              <label className={styles.label} htmlFor="">
                Habitaciones
              </label>
              <div>
                <Field
                  className={errors.rooms ? styles.error : styles.field}
                  name="rooms"
                  type="text"
                />
                <ErrorMessage
                  name="rooms"
                  component={() => (
                    <p className={styles.wrong}>{errors.rooms}</p>
                  )}
                />
              </div>
              <label className={styles.label} htmlFor="">
                Baños
              </label>
              <div>
                <Field
                  className={errors.baths ? styles.error : styles.field}
                  name="baths"
                  type="text"
                />
                <ErrorMessage
                  name="baths"
                  component={() => (
                    <p className={styles.wrong}>{errors.baths}</p>
                  )}
                />
              </div>
              <label className={styles.label} htmlFor="">
                Garage
              </label>
              <div>
                <Field
                  className={errors.garage ? styles.error : styles.field}
                  name="garage"
                  as="select"
                >
                  {/* <option>Garage</option> */}
                  <option name="garage" value={true} selected={true}>
                    Si
                  </option>
                  <option name="garage" value={false}>
                    No
                  </option>
                </Field>
                <ErrorMessage
                  name="garage"
                  component={() => (
                    <p className={styles.wrong}>{errors.garage}</p>
                  )}
                />
              </div>
              <input className={styles.button} type="submit" />
              {newProperty && (
                <p className={styles.success}>Formulario enviado</p>
              )}
            </section>
          </div>
        </Form>
      )}
    </Formik>
  );
}
