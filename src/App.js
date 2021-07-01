import './App.css';
import './index.css';
import configureFirebase from './config';
import { Switch, Route } from 'react-router-dom';
import Auth from './screens/Auth';

require('dotenv').config()
configureFirebase();

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/login'>
            <Auth />
          </Route>
          <Route exact path='/' component={Auth} />
        </Switch>
    </div>
  );
}

export default App;