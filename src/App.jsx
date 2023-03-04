import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Pasientes from "./components/Pasientes";

const initialData = JSON.parse(localStorage.getItem("citas")) || [];

const App = () => {
  const [data, setData] = useState(initialData);
  const [values, setValues] = useState({
    id: null,
    name: "",
    owner: "",
    email: "",
    checkin: "",
    sintoma: "",
  });

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(data));
  }, [data]);

  const deleteData = (id) => {
    const newData = data.filter((data) => data.id !== id);
    setData(newData);
  };

  const updateData = (id) => {
    const newData = data.filter((data) => data.id == id);
    setValues(newData);
  };

  return (
    <div>
      <Header />
      <div className="md:flex">
        <Formulario setData={setData} data={data} formValues={values} />
        <Pasientes
          data={data}
          deleteData={deleteData}
          updateData={updateData}
        />
      </div>
    </div>
  );
};

export default App;
