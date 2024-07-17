function JobInput({ job, updateJob, deleteJob }) {
  const handleCompany = (jobId, e) => {
    updateJob(jobId, 'company', e.target.value);
  }

  const handlePosition = (jobId, e) => {
    updateJob(jobId, 'position', e.target.value);
  }

  const handleResponsibilities = (jobId, e) => {
    updateJob(jobId, 'responsibilities', e.target.value);
  }

  const handleStartDate = (jobId, e) => {
    updateJob(jobId, 'start', e.target.value);
  }

  const handleEndDate = (jobId, e) => {
    updateJob(jobId, 'end', e.target.value);
  }

  const handleIsCurrent = (jobId, e) => {
    if (e.target.checked) {
      updateJob(jobId, 'end', '');
    }
    updateJob(jobId, 'isCurrent', e.target.checked);
  }

  return (
    <>
      <button
        className="delete-btn"
        type="button"
        onClick={() => deleteJob(job.id)}
      >
        Delete
      </button>

      <label htmlFor={"company-" + job.id}>
        Company:
        <input
          id={"company-" + job.id}
          type="text"
          value={job.school}
          onChange={(e) => handleCompany(job.id, e)}
        />
      </label>

      <label htmlFor={"position-" + job.id}>
        Position
        <input
          id={"position-" + job.id}
          type="text"
          value={job.position}
          onChange={(e) => handlePosition(job.id, e)}
        />
      </label>

      <label htmlFor={"responsibilities-" + job.id}>
        Responsibilities:
        <textarea
          id={"responsibilities-" + job.id}
          value={job.responsibilities}
          rows="4"
          onChange={(e) => handleResponsibilities(job.id, e)}
        >
        </textarea>
      </label>

      <label htmlFor={"isCurrent-" + job.id} className="isCurrentLabel">
        I am currently working here
        <input
          id={"isCurrent-" + job.id}
          type="checkbox"
          onChange={(e) => handleIsCurrent(job.id,e)}
          checked={job.isCurrent}
        />
      </label>

      <label htmlFor={"start-" + job.id}>
        Start date:
        <input
          id={"start-" + job.id}
          type="date"
          value={job.start}
          onChange={(e) => handleStartDate(job.id, e)}
        />
      </label>

      <label htmlFor={"end-" + job.id}>
        End date (or expected):
        <input
          id={"end-" + job.id}
          type="date"
          value={job.school}
          onChange={(e) => handleEndDate(job.id, e)}
          disabled={job.isCurrent}
        />
      </label>
    </>
  );
}

export default JobInput;
