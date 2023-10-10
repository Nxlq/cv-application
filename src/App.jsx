import { useState } from "react";
import "/src/styles/App.css";
import PersonalDetailsForm from "./components/PersonalDetails";
import ResumePreview from "./components/ResumePreview";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import { v4 as uuidv4 } from "uuid";

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
    curBulletPoint: "", // to render the live input, on bullet submit we push this down to the bulletPoints
    bulletPoints: [], // [{id: 0, description: .lkjflka}, {id:1, description: llfjdlkf}]
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

  function handleBulletAdd(curBulletPoint) {
    const bulletPointObj = {
      description: experienceDetails.curBulletPoint,
      id: uuidv4(),
    };

    const newBulletPointsArr = [...experienceDetails.bulletPoints];
    newBulletPointsArr.push(bulletPointObj);

    setExperienceDetails({
      ...experienceDetails,
      curBulletPoint: "",
      bulletPoints: newBulletPointsArr,
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
          handleBulletAdd={handleBulletAdd}
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
