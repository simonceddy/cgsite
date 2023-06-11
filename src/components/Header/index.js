function Header({ children }) {
  return (
    <header
      id="header-container"
      className="w-full col justify-center items-center mb-2"
    >
      {children}
    </header>
  );
}

export default Header;
