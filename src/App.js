import './App.css';
import Birthday from './Birthday';
import data from './data';
import { useState } from 'react';

function App() {
  const [people, setPeople] = useState(data);

  return (
    <div className="App">
      <div className="card">
      <header>
            <h1 id="total-birthdays">{people.length} birthdays today</h1>
        </header>
        <Birthday people={people} />
        <footer>
          <button onClick={() => setPeople([])}>Clear All</button>
        </footer>
      </div>
    </div>
  );
}

export default App;
