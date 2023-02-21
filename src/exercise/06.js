// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {

  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

  // const inputRef = React.useRef(null);


  const [input, setInput] = React.useState('');
  const [error, setError] = React.useState(null);
  function handleSubmit(event){
    event.preventDefault();
    // console.log(inputRef.current.value);
    onSubmitUsername(input);
  }

  function handleChange(event){
    console.log(event.target.value);
    let value = event.target.value;
    value = value.toLowerCase();
    setInput(value);
    // let isValid = value === value.toLowerCase();
    // setError(isValid? null: "Username must be lower cased");

  }
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label  htmlFor='usernameInput'>Username:</label>
        <input id='usernameInput' type="text" value={input} onChange={(e) => handleChange(e)} />
      </div>
      <div role={'alert'} style={{color: 'red'}}>{error}</div>
      <button disabled={error!==null} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
