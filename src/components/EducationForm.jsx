export default function EducationForm({ educationDetails, handleInput }) {
  const { school, degree, gpa, dateGraduated, location } = educationDetails;

  return (
    <form action="">
      <h2>Education</h2>
      <div className="form-inputs__wrapper">
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
    </form>
  );
}
