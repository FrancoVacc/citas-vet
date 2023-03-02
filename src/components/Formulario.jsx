import React from "react";

const Formulario = () => {
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
            className="w-full px-2 py-2 border border-gray-400 rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="dueño" className="uppercase block font-black">
            nombre dueño:
          </label>
          <input
            type="text"
            placeholder="Ingresa el nombre del dueño"
            id="dueño"
            className="w-full px-2 py-2 border border-gray-400 rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="mail" className="uppercase block font-black">
            Email:
          </label>
          <input
            type="email"
            placeholder="Ex: mail@mail.com"
            id="mail"
            className="w-full px-2 py-2 border border-gray-400 rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="fecha" className="uppercase block font-black">
            ingreso:
          </label>
          <input
            type="date"
            id="fecha"
            className="w-full px-2 py-2 border border-gray-400 rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="sintomas" className="uppercase block font-black">
            ingrese los síntomas:
          </label>
          <textarea
            placeholder="Ingresa el nombre de la mascota"
            id="sintomas"
            className="w-full px-2 py-2 border border-gray-400 rounded-sm resize-none"
          />
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
