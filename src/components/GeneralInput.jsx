function GeneralInput(props) {
  function handleName(e) {
    props.setGeneralInfo({ ...props.generalInfo, name: e.target.value });
  }

  function handleEmail(e) {
    props.setGeneralInfo({ ...props.generalInfo, email: e.target.value })
  }

  function handlePhone(e) {
    props.setGeneralInfo({ ...props.generalInfo, phone: e.target.value })
  }

  return (
    <>
      <label htmlFor='fullName'>Full name:</label>
      <input 
        id='fullName'
        type='text'
        value={props.generalInfo.name}
        onChange={handleName}
      />

      <label htmlFor='email'>Email:</label>
      <input 
        id='email'
        type='email'
        value={props.generalInfo.email}
        onChange={handleEmail}
      />

      <label htmlFor='phone'>Phone number:</label>
      <input 
        id='phone'
        type='tel'
        value={props.generalInfo.phone}
        onChange={handlePhone}
      />

      <p>{props.generalInfo.name}</p>
      <p>{props.generalInfo.email}</p>
      <p>{props.generalInfo.phone}</p>
    </>
  );
}

export default GeneralInput;
