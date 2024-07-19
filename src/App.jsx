import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import MainForm from "./components/MainForm";
import Preview from "./components/Preview";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [educations, setEducations] = useState([
    {
      id: uuidv4(),
      school: "",
      degree: "",
      start: "",
      end: "",
    },
  ]);

  const [jobs, setJobs] = useState([
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

  const handleGenerateCV = () => {
    const newWindow = window.open('', '_blank');
  
    // Start writing the document
    newWindow.document.write('<!DOCTYPE html><html><head><title>Preview CV</title>');
  
    // Include external stylesheets
    Array.from(document.querySelectorAll('link[rel="stylesheet"]')).forEach(link => {
      newWindow.document.write(link.outerHTML);
    });
  
    // Include inline styles
    Array.from(document.querySelectorAll('style')).forEach(style => {
      newWindow.document.write(style.outerHTML);
    });
  
    // Adding custom styles to center the preview-container
    newWindow.document.write(`
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: flex-start; /* Align at the top */
          height: 100vh;
          margin: 0; /* Remove default margin */
          padding: 20px; /* Optional padding */
          box-sizing: border-box; /* Include padding in height calculation */
        }
        .preview {
          width: 700px;
          min-height: 800px;
        }
      </style>
    `);
  
    newWindow.document.write('</head><body>');
    newWindow.document.write(document.querySelector('.preview-container').innerHTML);
    newWindow.document.write('</body></html>');
    newWindow.document.close();
  };

  return (
    <>
      <h1 className="app-title">CV Generator</h1>
      <div className="wrapper">
        <div className="form-container">
          <MainForm
            generalInfo={generalInfo}
            setGeneralInfo={setGeneralInfo}
            educations={educations}
            setEducations={setEducations}
            jobs={jobs}
            setJobs={setJobs}
          />
        </div>
        <div className="cv-container">
          <div className="preview-container">
            <Preview
              generalInfo={generalInfo}
              educations={educations}
              jobs={jobs}
            />
          </div>
          <button className="generate-cv" type="button" onClick={handleGenerateCV}>Generate my CV!</button>
        </div>
      </div>
    </>
  );
}
export default App;
