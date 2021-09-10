import './App.css';

import { useState, useEffect } from "react";
import { getAllMissions } from "./api/api";

export default function App() {
  //useState es una funcion
  const [search, setSearch] = useState("");
  const [missions, setMissions] = useState([]);
  //////////////////////////////////////////////////////////////
  const getMissions = async () => {
    const data = await getAllMissions();
    setMissions(data);
  };

  useEffect(() => {
    getMissions();
  }, []);

  const onChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    //console.log(value);
  };
  return (
    <div className="App">
      <h1 className="title">Misiones de Space X</h1>
      <input
        className="input"
        type="text"
        placeholder="Busca la mision"
        onChange={onChange}
        value={search}
      ></input>
      <ul>
        {missions
          .filter((mission, idx) => {
            return mission.mission_name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
          })
          .map((missions, idx) => {
            return <li>{missions.mission_name}</li>;
          })}
      </ul>
    </div>
  );
}
