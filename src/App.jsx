import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import MainForm from "./components/MainForm";
import Preview from "./components/Preview";
import "./styles/Preview.css";

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
        <div className="preview">

          <Preview />
        </div>
      </div>
    </>
  );
}
export default App;
