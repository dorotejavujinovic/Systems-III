import './App.css';
import MainPage from './components/MainPage';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import {Login} from './components/login/login';
import {Register} from './components/login/register';

function App() {
  
  return (
  
    <Router>
      <div id='navbar'>

      </div>
      < Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/log-in' exact component={Login}/>
        <Route path='/sign-up' exact component={Register}/>
        <Route path='/mainpage' exact component={MainPage}/>
        </Switch>
    </Router>
    
  );
}

export default App;
