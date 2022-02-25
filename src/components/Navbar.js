import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        
        <NavLink to="/beers" className={({ isActive }) => isActive ? "selected" : ""}>
          All Beers
        </NavLink>
        
        <NavLink to="/random-beer" className={({ isActive }) => isActive ? "selected" : ""}>
          Random Beer
        </NavLink>
        
        <NavLink to="/new-beer" className={({ isActive }) => isActive ? "selected" : ""}>
          New Beer
        </NavLink>
        
      </ul>
      
    </nav>
  );
}