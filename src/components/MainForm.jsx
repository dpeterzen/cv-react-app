import { v4 as uuidv4 } from 'uuid';
import GeneralInput from "./GeneralInput";
import EducationInput from "./EducationInput";

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

  return (
    <>
      <h1 className="app-title">CV Generator</h1>
      <form>
        <section>
          <h2>General Info</h2>
          <GeneralInput
            generalInfo={generalInfo}
            setGeneralInfo={setGeneralInfo}
          />
        </section>

        <section>
          <h2>Education</h2>
          {educations.map((education) => ( // use parens instead of brackets inside jsx when in the template
            <div key={education.id}>
              <EducationInput
                education={education}
                updateEducation={updateEducation}
              />
            </div>
          ))}
          <button type="button" onClick={addEducation}>Add Education</button>
        </section>
      </form>
    </>
  );
}

export default MainForm;
