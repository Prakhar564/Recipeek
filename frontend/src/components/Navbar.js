import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import AuthContext from '../context/AuthContext';
import { ThemeContext } from '../App'; // Adjust the import path as necessary
import ReactSwitch from 'react-switch';
import '../index.css'

function Navbar() {
  const { user, logoutUser } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext); // Accessing theme context
  const token = localStorage.getItem('authTokens');

  let user_id;
  if (token) {
    const decoded = jwt_decode(token);
    user_id = decoded.user_id; // Using let above allows us to assign to user_id here
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img style={{ width: '80px', padding: '0px' }} src="supermarket.png" alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              {!token && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                  </li>
                </>
              )}

              {token && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link" onClick={logoutUser} style={{ cursor: 'pointer' }}>Logout</span>
                  </li>
                </>
              )}
              {/* Theme toggle switch */}
              <li className="nav-item">
                <div data-test='Dark-mode' className="nav-link">
                  <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
                  <span style={{ marginLeft: '10px' }}>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
