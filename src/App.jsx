import { useState } from "react";
import "/src/styles/App.css";
import PersonalDetailsForm from "./components/PersonalDetails";
import ResumePreview from "./components/ResumePreview";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    location: "",
  });

  function handleInput(detailType, e) {
    setPersonalDetails({ ...personalDetails, [detailType]: e.target.value });
  }

  return (
    <>
      <PersonalDetailsForm
        personalDetails={personalDetails}
        handleInput={handleInput}
      />
      <ResumePreview personalDetails={personalDetails} />
    </>
  );
}

export default App;
