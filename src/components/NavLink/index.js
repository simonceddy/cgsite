import { NavLink as RNavLink } from 'react-router-dom';

function NavLink({ children, to = '' }) {
  return (
    <RNavLink
      to={to}
      className="hover:underline font-bold text-xl border-2 border-opacity-0 border-cyan-300 hover:border-opacity-100 rounded-lg block p-2"
    >
      {children}
    </RNavLink>
  );
}

export default NavLink;
