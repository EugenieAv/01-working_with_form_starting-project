import { useRef, useState} from 'react';


const SimpleInput = (props) => {
  const [nameInput, setNameInput] = useState('');
  const nameInputRef = useRef();

  const nameInputChangeHandler = (event) => {
    setNameInput(event.target.value);
  }
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log(nameInput);
    console.log(nameInputRef.current.value)
    // nameInputRef.current.value = '';    ça marche mais inélégant car   on ne veut pas manipuler le DOM directement
    setNameInput('');
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameInputChangeHandler} 
          ref={nameInputRef}
          value={nameInput}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
