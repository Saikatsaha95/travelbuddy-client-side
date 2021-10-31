import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../context/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="mb-3">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <NavLink className="navbar-brand fw-bold" to="/">
                TraveBuddy
              </NavLink>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>

                {user?.email && (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/myorders">
                      My orders
                    </NavLink>
                  </li>
                )}

                {user?.email && (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/manageallorders">
                      Manage all orders
                    </NavLink>
                  </li>
                )}

                {user?.email && (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/addServices">
                      Add a service
                    </NavLink>
                  </li>
                )}
              </ul>
              {user.email && (
                <span className="navbar-text me-2">
                  Hello {user.displayName ? user.displayName : ""}
                </span>
              )}

              {user.email ? (
                <button className="btn btn-info" onClick={logOut}>
                  Log Out
                </button>
              ) : (
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
