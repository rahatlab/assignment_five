const StackItem = ({ tech, removeFromStack }) => {
  return (
    <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
      <div className="flex items-center gap-3">
        <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
        <div>
          <p className="font-medium">{tech.name}</p>
          <p className="text-xs text-gray-500">{tech.category}</p>
        </div>
      </div>
      <button
        onClick={() => removeFromStack(tech.id)}
        className="btn border-0  text-gray-400 hover:text-gray-600 transition"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default StackItem;
