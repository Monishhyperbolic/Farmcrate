import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import GoogleLogin from "./GoogleLogin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="gloging">
        <GoogleLogin />
      </div>
    </>
  );
}

export default App;

