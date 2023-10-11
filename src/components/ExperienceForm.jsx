import "../styles/form.css";

function BulletTab({ bulletCount, handleClick, id }) {
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          console.log(id);
          handleClick(id);
        }}
      >
        Bullet {bulletCount}
      </button>
    </>
  );
}

export default function ExperienceForm({
  experienceDetails,
  handleInput,
  handleFormToggle,
  formId,
  isActive,
  handleBulletAdd,
  handleBulletRemove,
  curBulletPoint,
  handleBulletInput,
  handleBulletClick,
}) {
  const { company, positionTitle, startDate, endDate, location, bulletPoints } =
    experienceDetails;

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
              placeholder="Enter comany's name"
              value={company}
              onChange={(e) => handleInput("company", e)}
            ></input>
          </label>
          <label>
            Position Title
            <input
              type="text"
              placeholder="Enter position title"
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
              placeholder={
                bulletPoints.length > 0
                  ? "Brief bullet point description"
                  : "Click the add bullet button to begin!"
              }
              value={curBulletPoint}
              onChange={(e) => handleBulletInput(e)}
            ></input>
            {bulletPoints.map((bulletPointObj, i) => (
              <BulletTab
                key={bulletPointObj.id}
                id={bulletPointObj.id}
                bulletCount={i + 1}
                handleClick={handleBulletClick}
              />
            ))}
            <div className="bullet-btns__wrapper">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleBulletAdd(curBulletPoint);
                }}
              >
                Add Bullet
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleBulletRemove();
                }}
              >
                Remove Bullet
              </button>
            </div>
          </label>
        </div>
      )}
    </form>
  );
}
