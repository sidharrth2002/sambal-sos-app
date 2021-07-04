import './App.css';
import './index.css';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './screens/ProtectedRoute';
import Auth from './screens/Auth';
import ReportForm from './screens/ReportForm';
import Home from './screens/Home';
import FoodBanks from './screens/FoodBanks';

require('dotenv').config()

function App() {
  return (
      <div className="App">
          <Switch>
            <Route exact path='/login' component={Auth} />
            <ProtectedRoute exact path='/food-banks' component={FoodBanks} />
            <ProtectedRoute exact path='/home' component={Home} />
            <ProtectedRoute exact path="/report-flag" component={ReportForm} />
            <Route path='/' component={Auth} />
          </Switch>
      </div>
  );
}

export default App;