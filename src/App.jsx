import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Pasientes from "./components/Pasientes";

const initialData = [
  {
    id: 1,
    name: "piti",
    owner: "tami",
    email: "tami@mail.com",
    checkin: "12/02/2023",
    sintoma: "solo duerme",
  },
  {
    id: 2,
    name: "chiquito",
    owner: "Frnco",
    email: "franco@mail.com",
    checkin: "1/01/2023",
    sintoma: "solo come",
  },
  {
    id: 3,
    name: "oli",
    owner: "maxi",
    email: "maxi@mail.com",
    checkin: "4/02/2022",
    sintoma: "esta triste",
  },
];

const App = () => {
  const [data, setData] = useState(initialData);

  return (
    <div>
      <Header />
      <div className="md:flex">
        <Formulario />
        <Pasientes data={data} />
      </div>
    </div>
  );
};

export default App;
