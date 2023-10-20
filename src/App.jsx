import { useState } from "react";
import "/src/styles/App.css";
import PersonalDetailsForm from "./components/PersonalDetails";
import ResumePreview from "./components/ResumePreview";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import { v4 as uuidv4 } from "uuid";

function AddExperienceButton({ handleClick }) {
  return <button onClick={(e) => handleClick(e)}>Add Experience</button>;
}

function RemoveExperienceButton({ handleClick }) {
  return <button onClick={(e) => handleClick(e)}>Remove Experience</button>;
}

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

  // const [experienceDetails, setExperienceDetails] = useState({
  //   company: "",
  //   positionTitle: "",
  //   startDate: "",
  //   endDate: "",
  //   location: "",
  //   bulletPoints: [{ id: "init", description: "", isActive: true }], // [{id: 0, description: .lkjflka}, {id:1, description: llfjdlkf}]
  // });

  const [experiencesArr, setExperiencesArr] = useState([
    {
      id: "init",
      company: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      bulletPoints: [{ id: "init", description: "", isActive: true }], // [{id: 0, description: .lkjflka}, {id:1, description: llfjdlkf}]
    },
  ]);

  const [activeExpId, setActiveExpId] = useState("init");

  const activeExpIndex = experiencesArr.findIndex(
    (exp) => exp.id === activeExpId
  );

  console.log({ activeExpId });
  console.log({ activeExpIndex });

  const [activeBulletId, setActiveBulletId] = useState("init");
  console.log({ activeBulletId });

  const activeBulletIndex = experiencesArr[
    activeExpIndex
  ]?.bulletPoints.findIndex((bulletPoint) => bulletPoint.id === activeBulletId);
  console.log({ activeBulletIndex });

  const [activeFormId, setActiveFormId] = useState(0);

  const curBulletPoint =
    experiencesArr[activeExpIndex]?.bulletPoints[activeBulletIndex]
      ?.description || "";

  console.log(curBulletPoint);

  function handleFormToggle(formId) {
    if (formId === activeFormId) return setActiveFormId(null);
    setActiveFormId(formId);

    // if the clicked form was an experience form then we need to set an active bullet id to one inside the experiencesArr
    const selectedExperiencesIndex = experiencesArr.findIndex(
      (expObj) => expObj.id === formId
    );

    if (selectedExperiencesIndex !== -1) {
      setActiveExpId(formId);
      console.log({ activeExpId });

      const bulletsLength =
        experiencesArr[selectedExperiencesIndex].bulletPoints.length;
      if (bulletsLength <= 0) return setActiveBulletId(null);
      console.log("HAHAHAHAHHA");
      setActiveBulletId(
        experiencesArr[selectedExperiencesIndex].bulletPoints[bulletsLength - 1]
          .id
      );
    }
  }

  function handlePersonalInput(detailType, e) {
    setPersonalDetails({ ...personalDetails, [detailType]: e.target.value });
  }

  function handleEducationInput(detailType, e) {
    setEducationDetails({ ...educationDetails, [detailType]: e.target.value });
  }

  function handleExperienceInput(detailType, e) {
    // DO NOT use this function for the bullet input on the form - use the handleBulletInput instead
    const newExperiencesArr = [...experiencesArr];
    newExperiencesArr[activeExpIndex][detailType] = e.target.value;

    setExperiencesArr(newExperiencesArr);
  }

  function handleBulletInput(e) {
    if (experiencesArr[activeExpIndex].bulletPoints.length === 0) return;
    const newBulletPointsArr = [...experiencesArr[activeExpIndex].bulletPoints];
    newBulletPointsArr[activeBulletIndex].description = e.target.value;

    const newExperiencesArr = [...experiencesArr];
    newExperiencesArr[activeExpIndex].bulletPoints = newBulletPointsArr;

    setExperiencesArr(newExperiencesArr);
  }

  function handleBulletClick(selectedBulletId) {
    console.log(experiencesArr[activeExpIndex].bulletPoints);
    const selectedBulletIndex = experiencesArr[
      activeExpIndex
    ].bulletPoints.findIndex((bulletPoint) => {
      return bulletPoint.id == selectedBulletId;
    });

    console.log({ selectedBulletIndex });
    const newBulletPointsArr = [...experiencesArr[activeExpIndex].bulletPoints];
    newBulletPointsArr.forEach(
      (bulletObj, i) => (bulletObj.isActive = selectedBulletIndex === i)
    );

    const newExperiencesArr = [...experiencesArr];
    newExperiencesArr[activeExpIndex].bulletPoints = newBulletPointsArr;

    setActiveBulletId(
      experiencesArr[activeExpIndex].bulletPoints[selectedBulletIndex].id
    );

    setExperiencesArr(newExperiencesArr);
  }

  function handleBulletAdd() {
    const bulletPointObj = {
      id: uuidv4(),
      description: "",
    };

    const newBulletPointsArr = [...experiencesArr[activeExpIndex].bulletPoints];
    newBulletPointsArr.push(bulletPointObj);

    const newExperiencesArr = [...experiencesArr];
    newExperiencesArr[activeExpIndex].bulletPoints = newBulletPointsArr;

    setExperiencesArr(newExperiencesArr);

    setActiveBulletId(bulletPointObj.id);

    console.log(experiencesArr);
  }

  // handles what happens when the user clicks the remove bullet button
  function handleBulletRemove() {
    if (experiencesArr[activeExpIndex].bulletPoints.length === 0) return;
    const newBulletPointsArr = [
      ...experiencesArr[activeExpIndex].bulletPoints,
    ].toSpliced(activeBulletIndex, 1);

    const newExperiencesArr = [...experiencesArr];
    newExperiencesArr[activeExpIndex].bulletPoints = newBulletPointsArr;

    setExperiencesArr(newExperiencesArr);

    // this controls what the activeBulletId state will be set to after deleting the active item

    if (newBulletPointsArr.length === 0) {
      setActiveBulletId(null);
    } else {
      setActiveBulletId(newBulletPointsArr[newBulletPointsArr.length - 1].id);
    }
  }

  function handleExperienceAdd(e) {
    e.preventDefault();
    console.log(experiencesArr);

    const newExperienceObj = {
      id: uuidv4(),
      company: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      bulletPoints: [{ id: uuidv4(), description: "", isActive: true }], // [{id: 0, description: .lkjflka}, {id:1, description: llfjdlkf}]
    };

    const newExperiencesArr = [...experiencesArr];
    newExperiencesArr.push(newExperienceObj);

    setExperiencesArr(newExperiencesArr);
    setActiveExpId(newExperienceObj.id);
    setActiveBulletId(newExperienceObj.bulletPoints[0].id);
    setActiveFormId(newExperienceObj.id);
  }

  function handleExperienceRemove(e) {
    e.preventDefault();
    console.log(experiencesArr);
    const newExperienceArr = experiencesArr.toSpliced(activeExpIndex, 1);
    setExperiencesArr(newExperienceArr);
    setActiveBulletId(null);
    setActiveExpId(null);
    // setActiveExpId(null);
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
        {/* <ExperienceForm
          experienceDetails={experiencesArr[0]}
          handleInput={handleExperienceInput}
          handleFormToggle={handleFormToggle}
          formId={2}
          isActive={activeFormId === 2}
          handleBulletAdd={handleBulletAdd}
          handleBulletRemove={handleBulletRemove}
          curBulletPoint={curBulletPoint}
          handleBulletInput={handleBulletInput}
          handleBulletClick={handleBulletClick}
        /> */}
        {experiencesArr.map((experienceObj) => (
          <ExperienceForm
            key={experienceObj.id}
            experienceDetails={experienceObj}
            handleInput={handleExperienceInput}
            handleFormToggle={handleFormToggle}
            formId={experienceObj.id}
            isActive={activeFormId === experienceObj.id}
            handleBulletAdd={handleBulletAdd}
            handleBulletRemove={handleBulletRemove}
            curBulletPoint={curBulletPoint}
            handleBulletInput={handleBulletInput}
            handleBulletClick={handleBulletClick}
          />
        ))}
        <AddExperienceButton handleClick={handleExperienceAdd} />
        <RemoveExperienceButton handleClick={handleExperienceRemove} />
      </div>
      <ResumePreview
        personalDetails={personalDetails}
        educationDetails={educationDetails}
        experienceDetails={experiencesArr[0]}
        curBulletPoint={curBulletPoint}
        experiencesArr={experiencesArr}
      />
    </>
  );
}

export default App;
