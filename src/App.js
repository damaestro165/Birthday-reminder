import "./App.css";
import data from "./data";
import List from "./List";
import { useState } from "react";
import Input from "./Input";

function App() {
  const [people, setPeople] = useState(data);

  const addBirth = (data) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newPeople = { id, ...data };
    setPeople([...people, newPeople]);
  };

  return (
    <main>
      <div className="birth-container">
        <h3>Birthday Reminder</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </div>
      <div className="input">
        <Input onAdd={addBirth} />
      </div>
    </main>
  );
}

export default App;
