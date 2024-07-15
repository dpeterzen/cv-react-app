function EducationInput({ education, updateEducation, deleteEducation }) {

  const handleSchool = (educationId, e) => (
    updateEducation(educationId, 'school', e.target.value)
  )


  return (
    <>
      <button className="delete-btn" type="button" onClick={() => deleteEducation(education.id)}>
        Delete
      </button>
      <label htmlFor={'school-' + education.id}>
        School:
        <input
          id={'school-' + education.id}
          type="text"
          value={education.school}
          onChange={(e) => handleSchool(education.id, e)}
        />
      </label>

      <label htmlFor={'degree-' + education.id}>
        Degree
        <input
          id={'degree-' + education.id}
          type="text"
          value={education.degree}
          onChange={null}
        />
      </label>

      <label htmlFor={'start-' + education.id}>
        Start date:
        <input
          id={'start-' + education.id}
          type="date"
          value={education.start}
          onChange={null}
        />
      </label>

      <label htmlFor={'school-' + education.id}>
        End date (or expected):
        <input
          id={'school-' + education.id}
          type="date"
          value={education.school}
          onChange={null}
        />
      </label>
    </>
  );
}

export default EducationInput;
