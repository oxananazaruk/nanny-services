import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div>
        <NavLink to="/">Nanny.Services</NavLink>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/nannies">Nannies</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>
      </div>
    </header>
  );
};
