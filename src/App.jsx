import { useState } from 'react'
import './App.css'
import MainForm from './components/MainForm'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  })

  return (
    <>
      <MainForm
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
      />
    </>
  );
}
export default App
