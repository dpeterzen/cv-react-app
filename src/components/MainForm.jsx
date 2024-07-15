import { v4 as uuidv4 } from 'uuid';
import GeneralInput from "./GeneralInput";
import EducationInput from "./EducationInput";
import '../styles/MainForm.css';

function MainForm({
  generalInfo,
  setGeneralInfo,
  educations,
  setEducations,
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
      </form>
    </>
  );
}

export default MainForm;
