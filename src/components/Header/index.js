function Header({ children }) {
  return (
    <header
      id="header-container"
      className="w-full flex flex-col justify-center items-center mb-2"
    >
      {children}
    </header>
  );
}

export default Header;
