const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-200 rounded-full"></div>
        <div className="w-16 h-16 border-4 border-transparent border-t-pink-500 rounded-full animate-spin absolute top-0 left-0"></div>
      </div>
      <p className="mt-4 text-gray-500 font-medium">Loading technologies...</p>
    </div>
  );
};

export default Spinner;
