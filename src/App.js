import logo from './logo2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="landing">
        <header className="App-header">
          <img src={logo} className="logo" alt="logo" />
        </header>

        <div className="landing-content">
          <h1 className="value-prop">The Place Where Chefs find Professional Kitchen Spots</h1>
          <button className="request-btn">Request Beta Access</button>
        </div>
      </div>
    </div>
  );
}



export default App;
