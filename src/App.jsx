import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Pasientes from "./components/Pasientes";

const initialData = JSON.parse(localStorage.getItem("citas")) || [];

const App = () => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(data));
  }, [data]);

  console.log(data);

  return (
    <div>
      <Header />
      <div className="md:flex">
        <Formulario setData={setData} data={data} />
        <Pasientes data={data} />
      </div>
    </div>
  );
};

export default App;
