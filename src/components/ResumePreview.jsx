import "../styles/ResumePreview.css";

function ResumeHead() {
  return (
    <div className="resume-head__wrapper">
      <h2>First Last Name</h2>
      <span>someone@example.com | 123-456-7890 | Brooklyn, Ny</span>
    </div>
  );
}

export default function ResumePreview() {
  return (
    <div className="resume-preview__container">
      <ResumeHead />
    </div>
  );
}
