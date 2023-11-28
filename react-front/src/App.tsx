import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import DisplayProps from "./components/DisplayProps";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Button name="+ count" color="primary" onClick={handleClick} />
      <DisplayProps text={count.toString()} />
    </>
  );
}

export default App;
