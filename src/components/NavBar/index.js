function NavBar({ children }) {
  return (
    <div
      id="navbar-container"
      className="w-full md:w-4/5 lg:w-3/4 col sm:row bg-slate-500 bg-opacity-50 justify-around items-center rounded-lg"
    >
      {children}
    </div>
  );
}

export default NavBar;
