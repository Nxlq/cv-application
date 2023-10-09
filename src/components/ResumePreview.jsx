import "../styles/ResumePreview.css";

function ResumeHead({ personalDetails }) {
  return (
    <div className="resume-head__wrapper">
      <h2>{personalDetails.fullName}</h2>
      <span>
        someone@example.com : {personalDetails.email} | 123-456-7890:{" "}
        {personalDetails.phoneNumber} | Brooklyn, Ny :{" "}
        {personalDetails.location}
      </span>
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
