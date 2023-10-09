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

  const [educationDetails, setEducationDetails] = useState({
    school: "",
    degree: "",
    gpa: "",
    dateGraduated: "",
    location: "",
  });

  function handlePersonalInput(detailType, e) {
    setPersonalDetails({ ...personalDetails, [detailType]: e.target.value });
  }

  function handleEducationInput(detailType, e) {
    setEducationDetails({ ...educationDetails, [detailType]: e.target.value });
  }

  return (
    <>
      <div>
        <PersonalDetailsForm
          personalDetails={personalDetails}
          handleInput={handlePersonalInput}
        />
        <EducationForm
          educationDetails={educationDetails}
          handleInput={handleEducationInput}
        />
      </div>

      <ResumePreview
        personalDetails={personalDetails}
        educationDetails={educationDetails}
      />
    </>
  );
}

export default App;
