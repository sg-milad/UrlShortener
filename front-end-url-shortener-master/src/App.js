import { useState, useEffect } from 'react';
import './App.css';
import Urls from './components/Urls';

function App() {
  const [input, setInput] = useState('');

  const [URL, setURL] = useState('');

  useEffect(() => {
    setURL(input);
  }, [input]);

  const submitHandler = (e) => {
    e.preventDefault();

    const post = { URL };

    // *** url goes here!!!***
    fetch('http://localhost:5000/shorturls', {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: JSON.stringify(post),
    }).then(console.log(post));
    setInput('');
  };

  return (
    <div className='App'>
      <nav>
        <h1>URL Shortener</h1>
      </nav>
      <main>
        <form className='input' onSubmit={submitHandler}>
          <input
            type='text'
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder='Url'
            required
          />
          {input ? <button>Shrink</button> : <button disabled>Shrink</button>}
        </form>
        <Urls />
      </main>
    </div>
  );
}

export default App;
