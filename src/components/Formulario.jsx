import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "./ErrorMessage";

const Formulario = ({ setData, data }) => {
  const onSubmit = (values, resetForm) => {
    values.id = Date.now();
    setData([...data, values]);
    resetForm({ values: "" });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      owner: "",
      email: "",
      checkin: "",
      sintoma: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Debe tener menos de 15 caracteres")
        .required("Campo obligatorio"),
      owner: Yup.string()
        .max(15, "Debe tener menos de 15 caracteres")
        .required("Campo obligatorio"),
      email: Yup.string().email("Email invalido").required("Campo obligatorio"),
      checkin: Yup.date(8, "debe tener una fecha").required(
        "Campo obligatorio"
      ),
      sintoma: Yup.string()
        .max(50, "Debe tener menos de 50 caracteres")
        .required("Campo obligatorio"),
    }),
    onSubmit: (values, { resetForm }) => onSubmit(values, resetForm),
  });

  return (
    <div className="md:w-2/5 md:px-10 px-2 py-1">
      <div className="text-center">
        <h2 className="font-black text-2xl">Seguimiento de pacientes</h2>
        <p className="font-black my-2">
          Añade pacientes y{" "}
          <span className="text-indigo-600">Administralos</span>
        </p>
      </div>
      <form
        className=" bg-white py-10 px-5 rounded-md shadow-md"
        onSubmit={formik.handleSubmit}
      >
        <div>
          <label htmlFor="mascota" className="uppercase block font-black">
            nombre mascota:
          </label>
          <input
            type="text"
            placeholder="Ingresa el nombre de la mascota"
            id="mascota"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="w-full px-2 py-2 border border-gray-400 rounded-sm"
          />
          {formik.errors.name && <ErrorMessage error={formik.errors.name} />}
        </div>
        <div>
          <label htmlFor="dueño" className="uppercase block font-black">
            nombre dueño:
          </label>
          <input
            type="text"
            placeholder="Ingresa el nombre del dueño"
            id="dueño"
            name="owner"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.owner}
            className="w-full px-2 py-2 border border-gray-400 rounded-sm"
          />
          {formik.errors.owner && <ErrorMessage error={formik.errors.owner} />}
        </div>
        <div>
          <label htmlFor="mail" className="uppercase block font-black">
            Email:
          </label>
          <input
            type="email"
            placeholder="Ex: mail@mail.com"
            id="mail"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full px-2 py-2 border border-gray-400 rounded-sm"
          />
          {formik.errors.email && <ErrorMessage error={formik.errors.email} />}
        </div>
        <div>
          <label htmlFor="fecha" className="uppercase block font-black">
            ingreso:
          </label>
          <input
            type="date"
            id="fecha"
            name="checkin"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.checkin}
            className="w-full px-2 py-2 border border-gray-400 rounded-sm"
          />
          {formik.errors.checkin && (
            <ErrorMessage error={formik.errors.checkin} />
          )}
        </div>
        <div>
          <label htmlFor="sintomas" className="uppercase block font-black">
            ingrese los síntomas:
          </label>
          <textarea
            placeholder="Ingresa el nombre de la mascota"
            id="sintomas"
            name="sintoma"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.sintoma}
            className="w-full px-2 py-2 border border-gray-400 rounded-sm resize-none"
          />
          {formik.errors.sintoma && (
            <ErrorMessage error={formik.errors.sintoma} />
          )}
        </div>
        <input
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-400 text-white py-2"
          value={"Cargar Pasiente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
