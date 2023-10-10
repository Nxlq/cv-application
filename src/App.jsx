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
    bulletPoints: [{ id: 0, description: "" }], // [{id: 0, description: .lkjflka}, {id:1, description: llfjdlkf}]
  });

  const [activeBulletId, setActiveBulletId] = useState(0);
  console.log({ activeBulletId });

  const activeBulletIndex = experienceDetails.bulletPoints.findIndex(
    (bulletPoint) => bulletPoint.id === activeBulletId
  );
  console.log(activeBulletIndex);

  const [activeFormId, setActiveFormId] = useState(0);

  const curBulletPoint =
    experienceDetails.bulletPoints[activeBulletIndex].description;

  console.log(curBulletPoint);

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
    // DO NOT use this function for the bullet input on the form - use the handleBulletInput instead
    setExperienceDetails({
      ...experienceDetails,
      [detailType]: e.target.value,
    });
  }

  function handleBulletInput(e) {
    const newBulletPointsArr = [...experienceDetails.bulletPoints];
    newBulletPointsArr[activeBulletIndex].description = e.target.value;

    setExperienceDetails({
      ...experienceDetails,
      bulletPoints: newBulletPointsArr,
    });
  }

  function handleBulletClick(selectedBulletId) {
    const selectedBulletIndex = experienceDetails.bulletPoints.findIndex(
      (bulletPoint) => {
        return bulletPoint.id == selectedBulletId;
      }
    );

    console.log({ selectedBulletIndex });
    // const newBulletPointsArr = [...experienceDetails.bulletPoints];
    // newBulletPointsArr.forEach(
    //   (bulletObj, i) => (bulletObj.isActive = selectedBulletIndex === i)
    // )

    setActiveBulletId(experienceDetails.bulletPoints[selectedBulletIndex].id);
    // setExperienceDetails({
    //   ...experienceDetails,
    //   bulletPoints: newBulletPointsArr,
    // });
  }

  function handleBulletAdd() {
    const bulletPointObj = {
      id: uuidv4(),
      description: "",
    };

    const newBulletPointsArr = [...experienceDetails.bulletPoints];
    newBulletPointsArr.push(bulletPointObj);

    setExperienceDetails({
      ...experienceDetails,
      bulletPoints: newBulletPointsArr,
    });

    setActiveBulletId(bulletPointObj.id);

    console.log(experienceDetails);
  }

  function handleBulletRemove() {
    // copy the bulletpoints into a new array and remove the last one
    const newBulletPointsArr = [...experienceDetails.bulletPoints];
    const removedBullet = newBulletPointsArr.pop();

    let previousBullet;
    // if the array was or is currently empty after popping it
    if (!removedBullet || newBulletPointsArr.length === 0) {
      previousBullet = "";
    } else if (removedBullet === "") {
      console.log("REMOVED EMPTY");
    } else {
      //if the array length was greater than two then set the newCurBullet value to the old one
      previousBullet =
        newBulletPointsArr[newBulletPointsArr.length - 1].description;
    }

    setExperienceDetails({
      ...experienceDetails,
      curBulletPoint: previousBullet,
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
          handleBulletRemove={handleBulletRemove}
          curBulletPoint={curBulletPoint}
          handleBulletInput={handleBulletInput}
          handleBulletClick={handleBulletClick}
        />
      </div>
      <ResumePreview
        personalDetails={personalDetails}
        educationDetails={educationDetails}
        experienceDetails={experienceDetails}
        curBulletPoint={curBulletPoint}
      />
    </>
  );
}

export default App;
