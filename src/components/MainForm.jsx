import { v4 as uuidv4 } from 'uuid';
import GeneralInput from "./GeneralInput";
import EducationInput from "./EducationInput";
import JobInput from "./JobInput";
import '../styles/MainForm.css';

function MainForm({
  generalInfo,
  setGeneralInfo,
  educations,
  setEducations,
  jobs,
  setJobs
}) {

  const addEducation = () => {
    setEducations([
      ...educations,
      {
        id: uuidv4(),
        school: '',
        degree: '',
        start: '',
        end: '',
      },
    ]);
  }
  
  function updateEducation(educationId, property, value) {
    setEducations(
      educations.map((education) => {
        if (education.id === educationId) {
          return { ...education, [property]: value };
        } else {
          return education;
        }
      })
    )
  }

  const deleteEducation = (educationId) => {
    setEducations(
      educations.filter((education) => education.id !== educationId)
    );
  }

  const addJob = () => {
    setJobs([
      ...jobs,
      {
        id: uuidv4(),
        company: '',
        position: '',
        responsibilites: '',
        start: '',
        end: '',
        isCurrent: false,
      },
    ]);
  }

  const updateJob = (jobId, property, value) => {
    setJobs((prevJobs) => 
      prevJobs.map((job) => {
        if (job.id === jobId) {
          return { ...job, [property]: value };
        } else {
          return job;
        }
      })
    );
  }

  const deleteJob = (jobId) => {
    setJobs(jobs.filter((job) => job.id !== jobId));
  }

  return (
    <>
      <h1 className="app-title">CV Generator</h1>
      <form>
        <section>
          <h2>General Info</h2>
          <div className="input-container">
          <GeneralInput
            generalInfo={generalInfo}
            setGeneralInfo={setGeneralInfo}
          />
          </div>
        </section>

        <section>
          <h2>Education</h2>
          {educations.map((education) => (
            <div className="input-container" key={education.id}>
              <EducationInput
                education={education}
                updateEducation={updateEducation}
                deleteEducation={deleteEducation}
              />
            </div>
          ))}
          <button className="add-education" type="button" onClick={addEducation}>Add Education</button>
        </section>

        <section>
          <h2>Work Experience</h2>
          {jobs.map((job) => (
            <div className="input-container" key={job.id}>
            <JobInput
              job={job}
              updateJob={updateJob}
              deleteJob={deleteJob}
            />
          </div>
          ))}
          <button className="add-job" type="button" onClick={addJob}>Add Job</button>
        </section>
      </form>
    </>
  );
}

export default MainForm;
