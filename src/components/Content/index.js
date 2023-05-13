function Content({ children }) {
  return (
    <div className="w-full md:w-4/5 lg:w-3/4 flex-1 p-2 mx-auto">
      {children}
    </div>
  );
}

export default Content;
