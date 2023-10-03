import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import Users from './components/Users';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />

      </Routes>
    </div>
  );
}

export default App