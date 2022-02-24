import { FunctionComponent } from "react";
import { Link, Route, RouteProps } from "react-router-dom";
import userManager from "../configuration";
import { useSelector } from "react-redux";
import { Store } from "../redux/store";

const AdminLayout: FunctionComponent = ({ children }) => {
  const user = useSelector((s: Store) => s.auth.user);

  return (
    <div className="layout">
      <header>
        <h1>Todo App - Admin</h1>
      </header>

      <section style={{ display: "flex" }}>
        <nav style={{ display: "flex", flex: 2, border: "solid 1px #ccc" }}>
          <ul>
            <li>
              {" "}
              User:
              {user && user["profile"]["name"]}
            </li>
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
              <button onClick={() => userManager.signoutRedirect()}>
                Çıkış
              </button>
            </li>
          </ul>
        </nav>

        <main style={{ display: "flex", flexDirection: "column", flex: 8 }}>
          {children}
        </main>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default AdminLayout;

export const AdminRoute = ({ children, ...rest }: RouteProps) => {
  return (
    <Route {...rest}>
      <AdminLayout>{children}</AdminLayout>
    </Route>
  );
};
