import './App.css';
import './index.css';
import configureFirebase from './config';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './screens/ProtectedRoute';
import Auth from './screens/Auth';
import ReportForm from './screens/ReportForm';
import Home from './screens/Home';
import FoodBanks from './screens/FoodBanks';

require('dotenv').config()
configureFirebase();

function App() {
  return (
      <div className="App">
          <Switch>
            <Route exact path='/' component={Auth} />
            <Route exact path='/login' component={Auth} />
            <Route exact path='/food-banks' component={FoodBanks} />
            <Route exact path='/home' component={Home} />
            <Route exact path="/report-flag" component={ReportForm} />
          </Switch>
      </div>
  );
}

export default App;