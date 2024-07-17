import { v4 as uuidv4 } from "uuid";
import GeneralInput from "./GeneralInput";
import EducationInput from "./EducationInput";
import JobInput from "./JobInput";
import "../styles/MainForm.css";

function MainForm({
  generalInfo,
  setGeneralInfo,
  educations,
  setEducations,
  jobs,
  setJobs,
}) {
  const addEducation = () => {
    setEducations([
      ...educations,
      {
        id: uuidv4(),
        school: "",
        degree: "",
        start: "",
        end: "",
      },
    ]);
  };

  function updateEducation(educationId, property, value) {
    setEducations(
      educations.map((education) => {
        if (education.id === educationId) {
          return { ...education, [property]: value };
        } else {
          return education;
        }
      })
    );
  }

  const deleteEducation = (educationId) => {
    setEducations(
      educations.filter((education) => education.id !== educationId)
    );
  };

  const addJob = () => {
    setJobs([
      ...jobs,
      {
        id: uuidv4(),
        company: "",
        position: "",
        responsibilites: "",
        start: "",
        end: "",
        isCurrent: false,
      },
    ]);
  };

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
  };

  const deleteJob = (jobId) => {
    setJobs(jobs.filter((job) => job.id !== jobId));
  };

  function loadExample() {
    setGeneralInfo({
      name: 'Albus Dumbledore',
      email: 'albus@hogwarts.edu',
      phone: '555-432-9876',
    });
    setEducations([
      {
        id: uuidv4(),
        school: 'Hogwarts School of Witchcraft and Wizardry',
        degree: 'Master of Mystical Arts and Advanced Magical Theory',
        start: '1881-09-01',
        end: '1888-06-30',
      },
      {
        id: uuidv4(),
        school: 'Magical Academy of Dramatic Arts',
        degree: 'Bachelor of Enchantment, Minor in Transfiguration',
        start: '1877-09-01',
        end: '1881-06-30',
      },
    ]);
    setJobs([
      {
        id: uuidv4(),
        company: 'Order of Merlin',
        position: 'Supreme Mugwump',
        responsibilities: `• Oversaw international magical cooperation and law enforcement \n• Coordinated efforts against dark magical forces across continents \n• Led diplomatic missions to establish peace between magical and non-magical communities`,
        start: '1945-07-01',
        end: '1991-06-30',
        isCurrent: false,
      },
      {
        id: uuidv4(),
        company: 'Hogwarts School of Witchcraft and Wizardry',
        position: 'Headmaster',
        responsibilities: `• Administrated the leading school of magic in Great Britain, shaping future generations of wizards and witches \n• Pioneered courses in Defense Against the Dark Arts and Alchemy \n• Managed school affairs, faculty, and the introduction of protective magical enchantments around the school premises`,
        start: '1956-09-01',
        end: '1997-06-30',
        isCurrent: false,
      },
    ]);
  }
  

  function clearResume() {
    setGeneralInfo({
      name: "",
      email: "",
      phone: "",
    });
    setEducations([
      {
        id: uuidv4(),
        school: "",
        degree: "",
        start: "",
        end: "",
      },
    ]);
    setJobs([
      {
        id: uuidv4(),
        company: "",
        position: "",
        responsibilities: "",
        start: "",
        end: "",
        isCurrent: false,
      },
    ]);
  }

  return (
    <>
      <form>
        <div className="load-clear-btns">
          <button type="button" onClick={loadExample}>
            Load example
          </button>
          <button type="button" onClick={clearResume} className="delete-btn">
            Clear resume
          </button>
        </div>
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
          <button
            className="add-education"
            type="button"
            onClick={addEducation}
          >
            Add Education
          </button>
        </section>

        <section>
          <h2>Work Experience</h2>
          {jobs.map((job) => (
            <div className="input-container" key={job.id}>
              <JobInput job={job} updateJob={updateJob} deleteJob={deleteJob} />
            </div>
          ))}
          <button className="add-job" type="button" onClick={addJob}>
            Add Job
          </button>
        </section>
      </form>
    </>
  );
}

export default MainForm;
