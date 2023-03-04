import React from "react";
import Pasiente from "./Pasiente";

const Pasientes = ({ data, deleteData, updateData }) => {
  if (data.length === 0) {
    return (
      <div className="md:w-3/5 text-center">
        <h2 className="font-black text-2xl">Listado de pacientes</h2>
        <p className="font-black my-2 text-indigo-600">Sin Pacientes</p>
      </div>
    );
  }
  return (
    <div className="md:w-3/5 md:px-10 py-1 h-screen md:overflow-y-scroll">
      <div className="text-center">
        <h2 className="font-black text-2xl">Listado de pacientes</h2>
        <p className="font-black my-2">
          Administra tus{" "}
          <span className="text-indigo-600">pasientes y citas</span>
        </p>
      </div>
      {data.map((item) => (
        <Pasiente
          key={item.id}
          data={item}
          deleteData={deleteData}
          updateData={updateData}
        />
      ))}
    </div>
  );
};

export default Pasientes;
