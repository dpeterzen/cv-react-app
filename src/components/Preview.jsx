import GeneralPreview from "./GeneralPreview";
import EducationPreview from "./EducationPreview";
import JobPreview from "./JobPreview";
import "../styles/Preview.css";

function Preview(props) {

  // Helper function to check if the education/job has meaningful data
  const hasContent = (item) => {
    return (item.school || item.degree) || (item.company || item.position);
  };

  return (
    <>
      <div className="preview">
        <GeneralPreview info={props.generalInfo} />

        {/* Only show the Education title if there are education entries */}
        {props.educations.some(hasContent) && (
          <>
            <h2 className="section-title">Education</h2>
            {props.educations.map((education) => (
              <EducationPreview key={education.id} education={education} />
            ))}
          </>
        )}

        {props.jobs.some(hasContent) && (
          <>
            <h2 className="section-title">Experience</h2>
            {props.jobs.map((job) => {
              return <JobPreview key={job.id} job={job} />;
            })}
          </>
        )}
      </div>
    </>
  );
}

export default Preview;
