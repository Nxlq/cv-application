import "../styles/form.css";

export default function EducationForm({
  educationDetails,
  handleInput,
  handleFormToggle,
  formId,
  isActive,
}) {
  const { school, degree, gpa, dateGraduated, location } = educationDetails;

  return (
    <form action="">
      <div className="form-header__wrapper">
        <h2>Education</h2>
        <button
          className="btn-toggle-form"
          onClick={(e) => {
            e.preventDefault();
            handleFormToggle(formId);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>chevron-down</title>
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </button>
      </div>
      {!isActive ? null : (
        <div className="form-inputs__wrapper visible">
          <label>
            Name of school
            <input
              type="text"
              placeholder="Enter school/university"
              value={school}
              onChange={(e) => handleInput("school", e)}
            ></input>
          </label>
          <label>
            Degree
            <input
              type="text"
              placeholder="Enter degree/certificate earned"
              value={degree}
              onChange={(e) => handleInput("degree", e)}
            ></input>
          </label>
          <label>
            GPA earned
            <input
              type="text"
              placeholder="0.0"
              value={gpa}
              onChange={(e) => handleInput("gpa", e)}
            ></input>
          </label>
          <label>
            Date Graduated
            <input
              type="text"
              placeholder="Month, Year"
              value={dateGraduated}
              onChange={(e) => handleInput("dateGraduated", e)}
            ></input>
          </label>
          <label>
            Location
            <input
              type="text"
              placeholder="City, State"
              value={location}
              onChange={(e) => handleInput("location", e)}
            ></input>
          </label>
        </div>
      )}
    </form>
  );
}
