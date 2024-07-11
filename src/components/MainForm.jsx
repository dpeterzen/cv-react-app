import GeneralInput from './GeneralInput'

function MainForm({ generalInfo, setGeneralInfo }) {
  return (
    <>
      <h1>CV Generator</h1>
      <form>
        <section name="General Information">
          <GeneralInput 
            generalInfo={generalInfo}
            setGeneralInfo={setGeneralInfo}
          />
        </section>
      </form>
    </>
  );
}

export default MainForm;
