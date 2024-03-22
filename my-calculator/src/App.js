import "./App.css";
import { useState } from "react";

export default function Calculator() {
  const [value, setValue] = useState("");
  const [ans, setAns] = useState("");

  const handleButtonClick = (buttonValue) => {
    if (buttonValue === "C") {
      setValue("");
      setAns("");
    } else if (buttonValue === "=") {
      if (!value) {
        setAns("Error");
      } else {
        try {
          setAns(eval(value));
        } catch (error) {
          setValue("Error");
        }
      }
    } else {
      setValue(value + buttonValue);
    }
  };

  return (
    <div className="Calculator">
      <h1>React Calculator</h1>
      <input type="text" value={value} readOnly></input>
      {<h3 style={{ color: "#ccc" }}>{ans}</h3>}

      <div className="keypad">
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={() => handleButtonClick("C")}>C</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick("=")}>=</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
      </div>
    </div>
  );
}
