import { FunctionComponent } from "react";
import { Link, Route, RouteProps } from "react-router-dom";

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

