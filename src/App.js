import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages Import
import Contributors from "./components/contributors/contributors";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <header className="App-header">
      <Router>
        <Switch>
          <Route exact path="/maintainers" component={Contributors} />
        </Switch>
        <Footer />
      </Router>
    </header>
  );
}

export default App;
