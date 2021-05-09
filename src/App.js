import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
