import "../styles/form.css";

export default function ExperienceForm({
  experienceDetails,
  handleInput,
  handleFormToggle,
  formId,
  isActive,
}) {
  const {
    company,
    positionTitle,
    startDate,
    endDate,
    location,
    curBulletPoint,
    bulletPoints,
  } = experienceDetails;

  return (
    <form action="">
      <div className="form-header__wrapper">
        <h2>Experience</h2>
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
        <div className="form-inputs__wrapper">
          <label>
            Company Name
            <input
              type="text"
              placeholder="Enter school/university"
              value={company}
              onChange={(e) => handleInput("company", e)}
            ></input>
          </label>
          <label>
            Position Title
            <input
              type="text"
              placeholder="Enter degree/certificate earned"
              value={positionTitle}
              onChange={(e) => handleInput("positionTitle", e)}
            ></input>
          </label>
          <div className="start-end-date__wrapper">
            <label>
              Start Date
              <input
                type="text"
                placeholder="Month, Year"
                className="start-end-date-input"
                value={startDate}
                onChange={(e) => handleInput("startDate", e)}
              ></input>
            </label>
            <label>
              End Date
              <input
                type="text"
                placeholder="Month, Year"
                className="start-end-date-input"
                value={endDate}
                onChange={(e) => handleInput("endDate", e)}
              ></input>
            </label>
          </div>
          <label>
            Location
            <input
              type="text"
              placeholder="City, State"
              value={location}
              onChange={(e) => handleInput("location", e)}
            ></input>
          </label>
          <label>
            BulletPoint
            <input
              type="text"
              placeholder="Brief bullet point description"
              value={curBulletPoint}
              onChange={(e) => handleInput("curBulletPoint", e)}
            ></input>
            <button>Add Bullet</button>
          </label>
        </div>
      )}
    </form>
  );
}
