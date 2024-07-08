import logo from './logo.svg';
import './App.css';

import { useNavigate } from "react-router-dom"

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => navigate('/food/list')}>food</button>
        <button onClick={() => navigate('/vehicle/list')}>vehicle</button>
        {/* sub_app */}
        <button onClick={() => navigate('/noti/list')}>noti</button>
        <button onClick={() => navigate('/noti/edit')}>noti</button>
        <button onClick={() => navigate('/shop/list')}>shop</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
