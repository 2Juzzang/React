import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import Dog from './Dog';
import Cat from './Cat';


function App() {
  return (
    <div className="App">
      <div>
        <Link to="/" exact>Home으로</Link>
        <Link to="/Cat" exact>Cat으로</Link>
        <Link to="/Dog">Dog으로</Link>
      </div>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/Cat">
        <Cat />
      </Route>
      <Route path="/Dog">
        <Dog />
      </Route>
    </div>
  );
}

export default App;
