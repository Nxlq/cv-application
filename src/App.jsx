import { useState } from "react";
import "/src/styles/App.css";
import PersonalDetailsForm from "./components/PersonalDetails";
import ResumePreview from "./components/ResumePreview";
import EducationForm from "./components/EducationForm";

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
      <div>
        <PersonalDetailsForm
          personalDetails={personalDetails}
          handleInput={handleInput}
        />
        <EducationForm />
      </div>

      <ResumePreview personalDetails={personalDetails} />
    </>
  );
}

export default App;
