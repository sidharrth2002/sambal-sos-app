import "./App.css";
import "./index.css";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./screens/ProtectedRoute";
import Auth from "./screens/Auth";
import ReportForm from "./screens/ReportForm";
import Home from "./screens/Home";
import FoodBanks from "./screens/FoodBanks";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import GoogleLanding from "./screens/GoogleLanding";
// components imports
import LanguageSwitcher from "./components/LanguageSwitcher";
// localhost:3000/google/#scope=email%20profile%20openid%20https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile&id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5OGY0OWJjNmNhNDU4MWVhZThkZmFkZDQ5NGZjZTEwZWEyM2FhYjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNTc1MDYyMjY3NzA3LTcxbjZhMHRzNTIzcmU4dTYydjNpN3QwdXRjNWJnajQ4LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNTc1MDYyMjY3NzA3LTcxbjZhMHRzNTIzcmU4dTYydjNpN3QwdXRjNWJnajQ4LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE0MzU1MDIwOTM2MTU5ODA0ODE4IiwiZW1haWwiOiJzaWRoYXJydGgyMDAyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpYXQiOjE2NDAxOTQ1MjUsImV4cCI6MTY0MDE5ODEyNSwianRpIjoiYTg4ZDkxM2Q4YWFhZjM4NDUxYmI3ZjEzZjJjMWJhNDdlOWRjOTViMCJ9.QUngWhps2pMT-Cd2H8CLx4Vonz_XIWrXaCD9EmxxlP_gsTQ_IjVD61wCqxb0puGyzjygdKZLNge8EWqF5qSliPp4OQpM52PEGr1uRYdjmyLbnIRl8KfnrSJE6gArfhpB2czkyCjrNNMFJwdL97tVO6DBBZItHPwdUc5Qak1YA5YeDhihuSXeyJOTzGN_U7VO6Zxl9mK8ZUckaXNKu3zax4iEb6uCRwucysv57EmmGRE_1vRVq8T8za1t2aFEAGa4fRRHkpUuxDlMAk-0apSzgt-YDgBUteYnDNgrNRobNmv4RxQwmuqXqeefiLkk75ne-PTSGSQA1eZwudR13ktzYw&login_hint=AJDLj6L8A_IgkCrDaBst3VoBh2Nc3D-V9f5o0NnrfzH3fiX7lLb8gpMJ6cwa5tW991YR3b0Fl-KAiwr8e7Qcc7MtUwCMDFR-ow&client_id=575062267707-71n6a0ts523re8u62v3i7t0utc5bgj48.apps.googleusercontent.com
require("dotenv").config();
// https://www.sambalsos.com/google/#scope=email%20profile%20https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile%20openid&id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5OGY0OWJjNmNhNDU4MWVhZThkZmFkZDQ5NGZjZTEwZWEyM2FhYjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNTc1MDYyMjY3NzA3LTcxbjZhMHRzNTIzcmU4dTYydjNpN3QwdXRjNWJnajQ4LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNTc1MDYyMjY3NzA3LTcxbjZhMHRzNTIzcmU4dTYydjNpN3QwdXRjNWJnajQ4LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE0MzU1MDIwOTM2MTU5ODA0ODE4IiwiZW1haWwiOiJzaWRoYXJydGgyMDAyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpYXQiOjE2NDAxOTQxNDUsImV4cCI6MTY0MDE5Nzc0NSwianRpIjoiZDBhZDM4MGFlYmE1YjliMmFlMDM0M2I2ZTRlODlkNjNkZTgyZGExNSJ9.TNwqmV1c6FHDdiJzmOzjpaBNNS-Xx4YqDEWesiUUlMqqLHCx9Xl01mFydd4w8-lspsFngOt6KSsi0oE-2K3HbHDFATlrlMlfTkSTFY3Kou27wBfEpMu8e6lr0TrewzWWTdZjdpUoHj0YyG1V1rcIedU7GKslCPI0nVton0bcWvj3RiL8pUYr2Ajt0dAp7iQ1B9LdeV7uAtrZ7w6jEfVzQDD_DUAZprof_g1xsr6DnX5luG18KyEQ26WN0FfFmS3K-EpcemyXzfduv_LoMOPhcEiiu65fc6YDDXuSah2kROOtN-Fff5LwEyiSKd_PuXk8xtGsnI9upKJmJAqITDxJDA&login_hint=AJDLj6L8A_IgkCrDaBst3VoBh2Nc3D-V9f5o0NnrfzH3fiX7lLb8gpMJ6cwa5tW991YR3b0Fl-KAiwr8e7Qcc7MtUwCMDFR-ow&client_id=575062267707-71n6a0ts523re8u62v3i7t0utc5bgj48.apps.googleusercontent.com
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
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
