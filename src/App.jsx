import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "/src/styles/App.css";
import PersonalDetailsForm from "./components/PersonalDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PersonalDetailsForm />
    </>
  );
}

export default App;
