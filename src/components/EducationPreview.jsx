import '../styles/EducationPreview.css';

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

function EducationPreview({ education }) {
    return (
      <div className="education-preview">
        <div className="school-and-degree">
          <p className="school">{education.school}</p>
          <p className="degree">{education.degree}</p>
        </div>
        <div>
        <p>
          {formatDate(education.start)}{' '}
          {education.start && '-'}{' '}
          {!education.start && education.end ? ' - ' : ''}
          {formatDate(education.end)}
        </p>
        </div>
      </div>
    );
  }
  
  export default EducationPreview;