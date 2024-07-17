import "../styles/GeneralPreview.css";

function GeneralPreview({ info }) {
    return (
      <div className="personal-preview">
        <h1 className="name">{info.name}</h1>
        <div className="contact-info">
          <p>{info.email}</p>
          <p>{info.phone}</p>
        </div>
      </div>
    );
  }
  
  export default GeneralPreview;