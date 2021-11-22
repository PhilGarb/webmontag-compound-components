import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./styles/Layout.css";
import { paths } from "./paths";

export function Layout() {
  const location = useLocation();

  return (
    <div className="layout">
      <div className="content">
        <Outlet />
      </div>
      <div className="sidebar">
        <h1 className="title right-radius shadow-right">
          Compound Components Pattern
        </h1>
        <ol className="menu right-radius shadow-right">
          <h2 className="subheading">Outline</h2>
          {Object.entries(paths).map(([path, label]) => {
            return (
              <li key={path}>
                <Link
                  className={`small-heading ${
                    location.pathname === path ? "active" : "unactive"
                  }`}
                  to={path}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
