import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//Main app file

import './App.css';
import Home from './containers/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
