import "./App.css";
import { Route, Router, Switch } from "react-router-dom";
import history from "./history";
import { PublicRoute } from "./Layouts/PublicLayout";
import { AdminRoute } from "./Layouts/AdminLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import { Callback, makeAuthenticator } from "react-oidc";
import userManager from "./configuration";
import { FC, useEffect } from "react";
import Report from './pages/Report/index';
import { useDispatch } from 'react-redux';
import { setUser } from "./redux/reducers/AuthReducer";

const Routes: FC = () => (
  <>
    <PublicRoute exact path="/">
      <Home />
    </PublicRoute>

    <PublicRoute exact path="/about">
      <About />
    </PublicRoute>
    
    <AdminRoute exact path="/report">
      <Report />
    </AdminRoute>
  </>
);

const AppWithAuth = makeAuthenticator({
  userManager: userManager,
  signinArgs: { state: window.location.href },
})(Routes);

function App() {
  const dispatch = useDispatch();

  const fetchuser = async () => {
    const user = await userManager.getUser()
    
    if(user){
      dispatch(setUser(user));
    }
  }
  
  useEffect(() => {
    fetchuser();
  }, [])


  return (
    <Router history={history}>
      <Switch>
      <Route
        path="/signin-oidc"
        render={routeProps => (
          <Callback
            onSuccess={user => {
              dispatch(setUser(user));
              console.log("user", user)
              routeProps.history.push('/')
            }}
            
            userManager={userManager}
          />
        )}
      />
        <AppWithAuth />
      </Switch>
    </Router>
  );
}

export default App;
