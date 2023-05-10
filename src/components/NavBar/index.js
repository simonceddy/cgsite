function NavBar({ children }) {
  return (
    <div
      id="navbar-container"
      className="w-full flex flex-row justify-around items-center"
    >
      {children}
    </div>
  );
}

export default NavBar;
