import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { DataProvider } from "./contexts/DataProvider";
import User from './components/User';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Router>
          <Switch>
            <Route exact path="/user" component={User} />
          </Switch>
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
