import { useState } from 'react';
import './App.css';
import Urls from './components/Urls';

function App() {
  const [input, setInput] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    // *** url goes here!!!***
    fetch('----Your url----', {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ URL: input }),
    }).then(console.log('posted'));
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
