function Page({ children }) {
  return (
    <div className="w-full col justify-start items-center p-2 rounded-lg bg-orange-300/50">
      {children}
    </div>
  );
}

export default Page;
