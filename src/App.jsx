import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Simple } from "./Simple";
import { MyTextComponent } from "./MyTextComponent";
import { AudioTest } from "./AudioTest";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Simple /> */}
      <MyTextComponent></MyTextComponent>
      <AudioTest></AudioTest>
    </>
  );
}

export default App;
