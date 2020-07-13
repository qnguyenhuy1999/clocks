import React, { useEffect, useState } from "react";
import timezones from "compact-timezone-list";
import "./App.css";

import ClockItem from './Clock/ClockItem';

function App() {
  const [zones, setZone] = useState([]);
  const [select, setSelect] = useState([]);
  const [option, setOption] = useState("");

  useEffect(() => {
    setZone(timezones.map((timezone) => timezone.tzCode));
  }, []);

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  const handleSubmit = e => {
    setSelect(select.concat(option));
  }

  const removeTimezone = (item) => {
    return _ => {
      let index = select.indexOf(item);
      setSelect([
        ...select.slice(0, index),
        ...select.slice(index + 1)
      ])
    }
  }

  return (
    <div className="App">
      <input
        type="text"
        name="city"
        id="search"
        list="zones"
        onChange={handleChange}
      />
      <datalist id="zones">
        {zones &&
          zones.map((zone, index) => <option value={zone} key={index} />)}
      </datalist>
      <div className="btn btn-primary" onClick={handleSubmit}>Add new clock</div>

      <div className="list-clocks">
        {select.map((timezone, index) => (
          <ClockItem timezone={timezone} removeTimezone={removeTimezone} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
