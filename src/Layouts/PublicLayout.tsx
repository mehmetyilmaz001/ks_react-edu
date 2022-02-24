import { FunctionComponent } from "react";
import { Link, Route, RouteProps } from "react-router-dom";
import userManager from "../configuration";

interface PublicLayoutProps {}

const PublicLayout: FunctionComponent<PublicLayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <h1>Todo App</h1>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/report">Report</Link>
            </li>
            <li>
              <button onClick={() => userManager.signoutRedirect()}>Çıkış</button>
            </li>
          </ul>
        </nav>
      </header>

      <main style={{width: '80%', margin: 'auto'}}>{children}</main>

      <footer>
        <p>&copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default PublicLayout;

export const PublicRoute = ({children, ...rest} : RouteProps) => {
    return (
        <Route {...rest}>
            <PublicLayout>
                {children}  
            </PublicLayout>
        </Route>
    );
}

