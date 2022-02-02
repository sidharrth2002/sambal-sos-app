import "./App.css";
import "./index.css";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./screens/ProtectedRoute";
import Auth from "./screens/Auth";
import ReportForm from "./screens/ReportForm";
import Home from "./screens/Home";
import FoodBanks from "./screens/FoodBanks";
import GoogleLanding from "./screens/GoogleLanding";
import LanguageSwitcher from "./components/LanguageSwitcher";

require("dotenv").config();

function App() {
  return (
    <div className="App">
      <LanguageSwitcher />
      <Switch>
        <Route path="/google" component={GoogleLanding} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/food-banks" component={FoodBanks} />
        <ProtectedRoute exact path="/home" component={Home} />
        <ProtectedRoute exact path="/report-flag" component={ReportForm} />
        <Route
          exact
          path="/privacy-policy"
          render={() =>
            (window.location =
              "https://prickle-cost-0b4.notion.site/Sambal-SOS-Privacy-Policy-57f3de9f48bb4f489f508a7a58ea7175")
          }
        />
        <Route path="/" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
