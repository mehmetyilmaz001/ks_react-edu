import "./App.css";
import { Route, Router, Switch } from "react-router-dom";
import history from "./history";
import { PublicRoute } from "./Layouts/PublicLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import { Callback, makeAuthenticator } from "react-oidc";
import userManager from "./configuration";
import { FC } from "react";

const Routes: FC = () => (
  <>
    <PublicRoute exact path="/">
      <Home />
    </PublicRoute>

    <PublicRoute exact path="/about">
      <About />
    </PublicRoute>
  </>
);

const AppWithAuth = makeAuthenticator({
  userManager: userManager,
  signinArgs: { state: window.location.href },
})(Routes);

function App() {
  return (
    <Router history={history}>
      <Switch>
      <Route
        path="/signin-oidc"
        render={routeProps => (
          <Callback
            onSuccess={user => {
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
