import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import ErrorMessage from "./ErrorMessage";

const Formulario = ({ setData, data, formValues }) => {
  const onSubmit = (values, resetForm) => {
    if (formValues[0] === undefined) {
      values.id = Date.now();
      setData([...data, values]);
      resetForm({ values: "" });
    } else {
      const newData = data.map((item) =>
        item.id === values.id ? { ...values } : item
      );
      setData(newData);
      resetForm({ values: "" });
    }
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    setValues,
  } = useFormik({
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

  const updateValues = (formValues) => {
    const newData = formValues[0];
    if (newData == undefined) {
      return;
    }
    setValues(newData);
  };

  useEffect(() => {
    updateValues(formValues);
  }, [formValues]);

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
        onSubmit={handleSubmit}
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
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            className="w-full px-2 py-2 border border-gray-400 rounded-sm"
          />
          {errors.name && touched.name && <ErrorMessage error={errors.name} />}
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
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.owner}
            className="w-full px-2 py-2 border border-gray-400 rounded-sm"
          />
          {errors.owner && touched.owner && (
            <ErrorMessage error={errors.owner} />
          )}
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
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className="w-full px-2 py-2 border border-gray-400 rounded-sm"
          />
          {errors.email && touched.email && (
            <ErrorMessage error={errors.email} />
          )}
        </div>
        <div>
          <label htmlFor="fecha" className="uppercase block font-black">
            ingreso:
          </label>
          <input
            type="date"
            id="fecha"
            name="checkin"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.checkin}
            className="w-full px-2 py-2 border border-gray-400 rounded-sm"
          />
          {errors.checkin && touched.checkin && (
            <ErrorMessage error={errors.checkin} />
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
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.sintoma}
            className="w-full px-2 py-2 border border-gray-400 rounded-sm resize-none"
          />
          {errors.sintoma && touched.sintoma && (
            <ErrorMessage error={errors.sintoma} />
          )}
        </div>
        <input
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-400 text-white py-2"
          value={
            formValues[0] !== undefined
              ? "Actualizar Pasiente"
              : "Cargar Pasiente"
          }
        />
      </form>
    </div>
  );
};

export default Formulario;
