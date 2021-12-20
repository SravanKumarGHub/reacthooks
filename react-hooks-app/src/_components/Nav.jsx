import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
                <NavLink exact to="/" className="nav-item nav-link">Home</NavLink>
          
                <NavLink to="/usestatehook" className="nav-item nav-link">Use State </NavLink>
                <NavLink to="/userefhook" className="nav-item nav-link">Use Ref </NavLink>
                <NavLink to="/useeffecthook" className="nav-item nav-link">Use Effect </NavLink>
                <NavLink to="/usereducerhook" className="nav-item nav-link">Use Reducer </NavLink>
                <NavLink to="/usecallbackhook" className="nav-item nav-link">Use Callback </NavLink>
                <NavLink to="/usememhook" className="nav-item nav-link">Use Memo </NavLink>
                <NavLink to="/usecontexthook" className="nav-item nav-link">Use Context </NavLink>
                <NavLink to="/usecustomhook" className="nav-item nav-link">Use Custom Hook </NavLink>
                <NavLink to="/users" className="nav-item nav-link">Users</NavLink>
            </div>
        </nav>
    );
}

export { Nav };