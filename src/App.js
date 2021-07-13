import './App.css';
import './index.css';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './screens/ProtectedRoute';
import Auth from './screens/Auth';
import ReportForm from './screens/ReportForm';
import Home from './screens/Home';
import FoodBanks from './screens/FoodBanks';
import PrivacyPolicy from './screens/PrivacyPolicy';
import { Box, Select, SelectField } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

require('dotenv').config()

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
      <div className="App">
        <Box zIndex="10000" width="100px" position="fixed" top={5} left={5}>
          <Select size="sm" onChange={(e) => changeLanguage(e)}>
            <option value="en">English</option>
            <option value="malay">Malay</option>
            <option value="cn">Chinese</option>
            <option value="tamil">Tamil</option>
          </Select>
        </Box>
          <Switch>
            <Route exact path='/login' component={Auth} />
            <Route exact path='/food-banks' component={FoodBanks} />
            <ProtectedRoute exact path='/home' component={Home} />
            <ProtectedRoute exact path="/report-flag" component={ReportForm} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route path='/' component={Auth} />
          </Switch>
      </div>

  );
}

export default App;