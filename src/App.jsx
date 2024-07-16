import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import MainForm from './components/MainForm'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [educations, setEducations] = useState([
    {
      id: uuidv4(),
      school: '',
      degree: '',
      start: '',
      end: '',
    }
  ]);

  const [jobs, setJobs] = useState([
    {
      id: uuidv4(),
      company: '',
      position: '',
      responsibilites: '',
      start: '',
      end: '',
      isCurrent: false,
    },
  ]);

  return (
    <>
      <MainForm
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
        educations={educations}
        setEducations={setEducations}
        jobs={jobs}
        setJobs={setJobs}
      />
      <div className="content">
        <p>Preview content container</p>
        <p>{generalInfo.name}</p>
        {educations.map((education) => (
          <div key={education.id}>
            <p>{education.school}</p>
            <p>{education.degree}</p>
          </div>
        ))}
        <p></p>
      </div>
    </>
  );
}
export default App
