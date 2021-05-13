import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages Import
import Contributors from './components/contributors/contributors';
import Footer from './components/Footer/footer';

function App() {
  return (
    <Router>
      <Switch>
        <header className="App-header">
          <Route exact path="/maintainers" component={Contributors} />
        </header>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
