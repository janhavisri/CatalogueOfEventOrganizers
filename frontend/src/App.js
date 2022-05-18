import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/main/login";
import Admin from "./components/admin";
import AddOrg from "./components/admin/addorg";
import ManageOrg from "./components/admin/manageorg";
import User from "./components/user";
import Main from "./components/main";
// import Header from "./components/main/header";
import Signup from "./components/main/signup";
import Dashboard from "./components/admin/dashboard";
import Profile from "./components/admin/profile";
import { GoogleLogin } from 'react-google-login';

function App() {
  // const handleFailure = (result) => {
  //   alert(result);
  // };
  // const handleLogin = (googleData) => {
  //   console.log(googleData);
  // };
  return (
    <div>
    <BrowserRouter>
    
      <Routes>
        <Route element={<Admin />} path="admin">
          <Route element={<Dashboard />} path="dashboard" />
          <Route element={<AddOrg />} path="addorg" />
          <Route element={<ManageOrg />} path="manageorg" />
          <Route element={<Profile />} path="profile" />
        </Route>
        <Route element={<User />} path="user"></Route>
        <Route element={<Main />} path="main">
        {/* <Route element={<Header />} path="header"></Route> */}
        <Route element={<Login/>} path="login"></Route>
        <Route element={<Signup/>} path="signup"></Route>
        </Route>
      </Routes>
      
    </BrowserRouter>
    {/* <h1>React Google log in</h1>
    <div>
      <GoogleLogin>
        clientId={ProcessingInstruction.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="log in with Google"
        onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiesPolicy={'single_host_origin'}
      </GoogleLogin>
    </div> */}
    </div>
  );
}

export default App;
