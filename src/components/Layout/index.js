function Layout({ children }) {
  return (
    <div
      id="layout-container"
      className="w-full h-full flex flex-col justify-center items-start whitespace-nowrap overflow-y-scroll bg-black text-teal-200"
    >
      {children}
    </div>
  );
}

export default Layout;
