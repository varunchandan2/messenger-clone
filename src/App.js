import React, { useState } from 'react';
import './App.css';

function App() {
  const[input, setInput] = useState('');
  const [messages, setMessages] = useState(['Hi', 'Whats up']);

  console.log(input);
  console.log(messages);

  const sendMessage = (event => {
    event.preventDefault();
    //all the logic to send the message goes
    setMessages([...messages, input]);
    setInput('');

  })
  return (
    <div className="App">
      <h1> Welcome Varun!</h1>

      <form>
      <input value ={input} onChange={event => setInput(event.target.value)}/>
      <button type = 'submit' onClick={sendMessage}> Send message </button>
      </form>


      {
        messages.map(message => (
          <p>{message}</p>
        ))
      }

      {/* message themselves */}
    </div>
  );
}

export default App;
