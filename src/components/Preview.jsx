import GeneralPreview from "./GeneralPreview"
import EducationPreview from './EducationPreview';
import JobPreview from './JobPreview';
import "../styles/Preview.css";

function Preview(props) {
  return (
    <>
      <div className="preview">
        <GeneralPreview info={props.generalInfo} />
        <h2 className="section-title">Education</h2>
        {props.educations.map((education) => (
          <EducationPreview key={education.id} education={education} />
        ))}
        <h2 className="section-title">Experience</h2>
        {props.jobs.map((job) => {
          return <JobPreview key={job.id} job={job} />;
        })}
      </div>
    </>
  );
}

export default Preview;
