
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Table from "./Table.js";
import GraphPage from './GraphPage.js'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">JorderSky</a>
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link className="nav-link" to="/table">Table</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/graph">Graph</Link>
          </li>
        </ul>
      </div>
    </nav>

    <div className='viewBox'>
    <Switch>
    <Route exact path="/table" component={Table}/>
      <Route exact path="/graph" component={GraphPage}/>
        </Switch>

    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
