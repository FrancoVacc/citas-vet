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
    </div>
  );
};

export default Pasiente;
