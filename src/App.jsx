import { useState } from "react";
import "/src/styles/App.css";
import PersonalDetailsForm from "./components/PersonalDetails";
import ResumePreview from "./components/ResumePreview";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";

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

  const [experienceDetails, setExperienceDetails] = useState({
    company: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    curBulletPoint: "",
    bulletPoints: [],
  });

  const [activeFormId, setActiveFormId] = useState(0);

  function handleFormToggle(formId) {
    if (formId === activeFormId) return setActiveFormId(null);
    setActiveFormId(formId);
  }

  function handlePersonalInput(detailType, e) {
    setPersonalDetails({ ...personalDetails, [detailType]: e.target.value });
  }

  function handleEducationInput(detailType, e) {
    setEducationDetails({ ...educationDetails, [detailType]: e.target.value });
  }

  function handleExperienceInput(detailType, e) {
    setExperienceDetails({
      ...experienceDetails,
      [detailType]: e.target.value,
    });
  }

  return (
    <>
      <div>
        <PersonalDetailsForm
          personalDetails={personalDetails}
          handleInput={handlePersonalInput}
          handleFormToggle={handleFormToggle}
          formId={0}
          isActive={activeFormId === 0}
        />
        <EducationForm
          educationDetails={educationDetails}
          handleInput={handleEducationInput}
          handleFormToggle={handleFormToggle}
          formId={1}
          isActive={activeFormId === 1}
        />
        <ExperienceForm
          experienceDetails={experienceDetails}
          handleInput={handleExperienceInput}
          handleFormToggle={handleFormToggle}
          formId={2}
          isActive={activeFormId === 2}
        />
      </div>
      <ResumePreview
        personalDetails={personalDetails}
        educationDetails={educationDetails}
        experienceDetails={experienceDetails}
      />
    </>
  );
}

export default App;
