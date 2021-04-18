import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages Import
import Contributors from "./components/contributors/contributors";

function App() {
  return (
    <header className="App-header">
      <Router>
        <Switch>
          <Route exact path="/contributors" component={Contributors} />
        </Switch>
      </Router>
    </header>
  );
}

export default App;
