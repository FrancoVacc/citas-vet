import React from "react";

const Pasiente = ({ data }) => {
  const { name, owner, email, checkin, sintoma } = data;
  return (
    <div className="bg-white shadow-md px-5 py-5 rounded-md my-2">
      <div className="mb-2">
        <h2 className="uppercase font-black ">
          Nombre: <span className=" normal-case font-normal">{name}</span>
        </h2>
      </div>
      <div className="mb-2">
        <h2 className="uppercase font-black ">
          Dueño: <span className=" normal-case font-normal">{owner}</span>
        </h2>
      </div>
      <div className="mb-2">
        <h2 className="uppercase font-black ">
          Email: <span className=" normal-case font-normal">{email}</span>
        </h2>
      </div>
      <div className="mb-2">
        <h2 className="uppercase font-black ">
          Ingreso: <span className=" normal-case font-normal">{checkin}</span>
        </h2>
      </div>
      <div className="mb-2">
        <h2 className="uppercase font-black ">
          síntomas: <span className=" normal-case font-normal">{sintoma}</span>
        </h2>
      </div>
      <div className="mb-2">
        <button className="py-2 px-5 bg-red-600 hover:bg-red-500 text-white rounded-sm mr-5">
          Eliminar
        </button>
        <button className="py-2 px-5 bg-blue-600 hover:bg-blue-500 text-white rounded-sm">
          Actualizar
        </button>
      </div>
    </div>
  );
};

export default Pasiente;
