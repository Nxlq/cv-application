export default function EducationForm() {
  return (
    <form action="">
      <h2>Education</h2>
      <div className="form-inputs__wrapper">
        <label>
          Name of school
          <input type="text" placeholder="Enter school/university"></input>
        </label>
        <label>
          Degree
          <input
            type="text"
            placeholder="Enter degree/certificate earned"
          ></input>
        </label>
        <label>
          Date Graduated
          <input type="text" placeholder="Month, Year"></input>
        </label>
        <label>
          Location
          <input type="text" placeholder="City, State"></input>
        </label>
      </div>
    </form>
  );
}
