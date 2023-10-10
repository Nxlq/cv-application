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

function EducationSection({ educationDetails }) {
  const { school, degree, gpa, dateGraduated, location } = educationDetails;

  function getSchoolsAcronym(schoolName) {
    if (!schoolName) return;

    const words = schoolName.trim().split(" ");
    const acronym = words
      .map((word) => {
        if (word !== "of") return word[0].toUpperCase();
      })
      .join("");
    return acronym;
  }

  const schoolsAcronym = getSchoolsAcronym(school);

  return (
    <section>
      <h3>Education</h3>
      <div className="section__wrapper">
        <div>
          <h4>
            {school ? school : "Name of School"} (
            {schoolsAcronym ? schoolsAcronym : "ABV"})
          </h4>
          <h5 className="degree-info">
            {degree ? degree : "Degree/Certificate earned"}
          </h5>
          <span className="gpa-info">Major GPA: {gpa ? gpa : "X.X"}/4.0</span>
        </div>
        <div className="date-location">
          <span className="location">
            {location ? location : "Schools, Location"}
          </span>
          <span className="date">
            {dateGraduated ? dateGraduated : "Month , Year"}
          </span>
        </div>
      </div>
    </section>
  );
}

function BulletPoints({ children }) {
  return <ul>{children}</ul>;
}

function ExperienceSection() {
  return (
    <section>
      <h3>Experience</h3>
      <div className="section__wrapper">
        <div>
          <h4>Job Title</h4>
          <h5>Company Name</h5>
        </div>
        <div className="date-location">
          <span className="location">City, State</span>
          <span className="date">Month , Year</span>
        </div>
      </div>
      <BulletPoints>
        <li>{"lkdjflaskdjflksadjflkdsjfldsjfldsjkfldskjflkdsjfl"}</li>
        <li>{"lkdjflaskdjflksadjflkdsjfldsjfldsjkfldskjflkdsjfl"}</li>
      </BulletPoints>
    </section>
  );
}

export default function ResumePreview({ personalDetails, educationDetails }) {
  return (
    <div className="resume-preview__container">
      <ResumeHead personalDetails={personalDetails} />
      <EducationSection educationDetails={educationDetails} />
      <ExperienceSection />
    </div>
  );
}
