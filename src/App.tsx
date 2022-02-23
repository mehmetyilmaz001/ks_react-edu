import "./App.css";
import { Router, Switch } from "react-router-dom";
import history from "./history";
import { PublicRoute } from "./Layouts/PublicLayout";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <PublicRoute exact path="/">
          <Home />
        </PublicRoute>

        <PublicRoute exact path="/about">
          <About />
        </PublicRoute>
      </Switch>
    </Router>
  );
}

export default App;
