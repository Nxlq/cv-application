import "../styles/ResumePreview.css";

function ResumeHead({ personalDetails }) {
  const { fullName, email, phoneNumber, location } = personalDetails;

  return (
    <div className="resume-head__wrapper">
      <h2>{fullName ? fullName : "Your Full Name"}</h2>
      <p>
        {email ? email : "emailhere@example.com"} |{" "}
        {phoneNumber ? phoneNumber : "123-456-7890"} |{" "}
        {location ? location : "City, State"}
      </p>
    </div>
  );
}

export default function ResumePreview({ personalDetails }) {
  return (
    <div className="resume-preview__container">
      <ResumeHead personalDetails={personalDetails} />
    </div>
  );
}
