import '../styles/JobPreview.css';

  // Helper function to format date or return empty string if invalid
  const formatDate = (dateString) => {
    if (!dateString) return '';  // Return empty if no date provided
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? '' : date.toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'short',
      timeZone: 'UTC',
    });
  };

function JobPreview({ job }) {
  return (
    <div className="job-preview">
      <div className="position-and-start-end">
        <p className="position">{job.position}</p>
        <p>
          {formatDate(job.start)}{' '}
          {job.start && '-'}{' '}
          {!job.start && job.end ? ' - ' : ''}
          {job.isCurrent ? 'Present' : formatDate(job.end)}
        </p>
      </div>
      <p className="company">{job.company}</p>
      <p className="responsibilities">{job.responsibilities}</p>
    </div>
  );
}

export default JobPreview;