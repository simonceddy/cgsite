import { NavLink as RNavLink } from 'react-router-dom';

function NavLink({ children, to = '' }) {
  return (
    <RNavLink
      to={to}
      className="hover:underline font-bold"
    >
      {children}
    </RNavLink>
  );
}

export default NavLink;
