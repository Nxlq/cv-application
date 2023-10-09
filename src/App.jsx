import { useState } from "react";
import "/src/styles/App.css";
import PersonalDetailsForm from "./components/PersonalDetails";
import ResumePreview from "./components/ResumePreview";

function App() {
  return (
    <>
      <PersonalDetailsForm />
      <ResumePreview />
    </>
  );
}

export default App;
