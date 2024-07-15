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

  return (
    <>
      <MainForm
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
        educations={educations}
        setEducations={setEducations}
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
