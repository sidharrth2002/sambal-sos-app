import './App.css';
import './index.css';
import configureFirebase from './config'
import Maintenance from './screens/Maintenance';
import Flags from './screens/Flags';

require('dotenv').config()
configureFirebase();

function App() {
  return (
    <div className="App">
      <Maintenance />
    </div>
  );
}

export default App;
