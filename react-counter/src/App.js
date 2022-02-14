import { useState, useEffect } from "react";
import Coffees from "./coffees";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [useName, setUserName] = useState("");
  useEffect(() => {
    setCounter(501);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}> +</button>
        &nbsp;
        <button onClick={() => setCounter(0)}> RESET </button>
        &nbsp;
        <button onClick={() => setCounter(counter - 1)}> - </button>
        <Coffees />
      </header>
    </div>
  );
}

export default App;
