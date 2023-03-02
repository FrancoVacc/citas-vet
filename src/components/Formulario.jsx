import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "./ErrorMessage";

const Formulario = () => {
  const formik = useFormik({
    initialValues: {
      mascota: "",
      owner: "",
      mail: "",
      date: "",
      sintomas: "",
    },
    validationSchema: Yup.object({
      mascota: Yup.string()
        .max(15, "Debe tener menos de 15 caracteres")
        .required("Campo obligatorio"),
      owner: Yup.string()
        .max(15, "Debe tener menos de 15 caracteres")
        .required("Campo obligatorio"),
      mail: Yup.string().email("Email invalido").required("Campo obligatorio"),
      date: Yup.date(8, "debe tener una fecha").required("Campo obligatorio"),
      sintomas: Yup.string()
        .max(50, "Debe tener menos de 50 caracteres")
        .required("Campo obligatorio"),
    }),
    onSubmit: console.log("enviando Formulario"),
  });

  return (
    <div className="md:w-1/2 md:px-10 px-2 py-1">
      <div className="text-center">
        <h2 className="font-black text-2xl">Seguimiento de pacientes</h2>
        <p className="font-black my-2">
          Añade pacientes y{" "}
          <span className="text-indigo-600">Administralos</span>
        </p>
      </div>
      <form className=" bg-white py-10 px-5 rounded-md shadow-md">
        <div>
          <label htmlFor="mascota" className="uppercase block font-black">
            nombre mascota:
          </label>
          <input
            type="text"
            placeholder="Ingresa el nombre de la mascota"
            id="mascota"
            name="mascota"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mascota}
            className="w-full px-2 py-2 border border-gray-400 rounded-sm"
          />
          {formik.errors.mascota && (
            <ErrorMessage error={formik.errors.mascota} />
          )}
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
            name="mail"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mail}
            className="w-full px-2 py-2 border border-gray-400 rounded-sm"
          />
          {formik.errors.mail && <ErrorMessage error={formik.errors.mail} />}
        </div>
        <div>
          <label htmlFor="fecha" className="uppercase block font-black">
            ingreso:
          </label>
          <input
            type="date"
            id="fecha"
            name="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
            className="w-full px-2 py-2 border border-gray-400 rounded-sm"
          />
          {formik.errors.date && <ErrorMessage error={formik.errors.date} />}
        </div>
        <div>
          <label htmlFor="sintomas" className="uppercase block font-black">
            ingrese los síntomas:
          </label>
          <textarea
            placeholder="Ingresa el nombre de la mascota"
            id="sintomas"
            name="sintomas"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.sintomas}
            className="w-full px-2 py-2 border border-gray-400 rounded-sm resize-none"
          />
          {formik.errors.sintomas && (
            <ErrorMessage error={formik.errors.sintomas} />
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
