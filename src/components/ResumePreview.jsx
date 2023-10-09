import "../styles/ResumePreview.css";

function ResumeHead({ personalDetails }) {
  const { fullName, email, phoneNumber, location } = personalDetails;

  return (
    <section className="resume-head__wrapper">
      <h2>{fullName ? fullName : "Your Full Name"}</h2>
      <p>
        {email ? email : "emailhere@example.com"} |{" "}
        {phoneNumber ? phoneNumber : "123-456-7890"} |{" "}
        {location ? location : "City, State"}
      </p>
    </section>
  );
}

function EducationSection() {
  return (
    <section>
      <h3>Education</h3>
      <div className="education__wrapper">
        <div>
          <h4>Harvard Univeristy (HU)</h4>
          <h5 className="degree-info">
            Bachelor of Astrochemistry Quantam Computing Cell Engineering
          </h5>
          <span className="gpa-info">
            Major GPA: 5.2/4.0; Overall GPA: 5.0/4.0
          </span>
        </div>
        <div className="date-location">
          <span className="location">Brooklyn, Ny</span>
          <span className="date">May 2021</span>
        </div>
      </div>
    </section>
  );
}

export default function ResumePreview({ personalDetails }) {
  return (
    <div className="resume-preview__container">
      <ResumeHead personalDetails={personalDetails} />
      <EducationSection />
    </div>
  );
}
