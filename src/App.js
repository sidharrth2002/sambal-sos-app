import './App.css';
import './index.css';
import configureFirebase from './config';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './screens/ProtectedRoute';
import Auth from './screens/Auth';
import ReportForm from './screens/ReportForm';

require('dotenv').config()
// configureFirebase();

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/login'>
            <Auth />
          </Route>
          <Route exact path="/report-flag" component={ReportForm} />
        </Switch>
    </div>
  );
}

export default App;