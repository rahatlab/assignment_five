const SkeletonCard = () => {
  return (
    <div className="border border-gray-200 rounded-xl p-5 animate-pulse">
      <div className="flex justify-between items-start mb-3">
        <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
        <div className="w-16 h-6 bg-gray-200 rounded-full"></div>
      </div>
      <div className="w-24 h-5 bg-gray-200 rounded mb-2"></div>
      <div className="space-y-1 mb-4">
        <div className="w-full h-3 bg-gray-200 rounded"></div>
        <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-14 h-5 bg-gray-200 rounded"></div>
        <div className="w-10 h-3 bg-gray-200 rounded"></div>
        <div className="w-12 h-3 bg-gray-200 rounded"></div>
      </div>
      <div className="w-full h-10 bg-gray-200 rounded-lg"></div>
    </div>
  );
};

export default SkeletonCard;
