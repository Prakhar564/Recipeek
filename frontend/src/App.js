import React, { createContext, useState } from 'react';
import './App.css';
import ReactSwitch from 'react-switch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

import Homepage from './components/Homepage';
import Registerpage from './components/Registerpage';
import Loginpage from './components/Loginpage';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import RecipeBook from './components/Recipe-book';
import SmartCooking from './components/Smart-cooking';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <AuthProvider>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {/* Pass toggleTheme and theme as props to Navbar */}
          <Navbar toggleTheme={toggleTheme} theme={theme} />
          <div className={`App ${theme}`} id={theme}>
            <Switch>
              <PrivateRoute component={Dashboard} path="/dashboard" exact />
              <Route component={Loginpage} path="/login" />
              <Route component={Registerpage} path="/register" exact />
              <Route component={Homepage} path="/" exact />
              <Dashboard />
              <RecipeBook/>
              <SmartCooking/>
            </Switch>
          </div>
        </ThemeContext.Provider>
      </AuthProvider>
    </Router>
  );
}

export default App;
