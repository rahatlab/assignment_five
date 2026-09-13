const badgeColors = {
  Popular: "bg-blue-100 text-blue-600",
  Versatile: "bg-green-100 text-green-600",
  Fast: "bg-red-100 text-red-600",
  Standard: "bg-purple-100 text-purple-600",
  "Top SQL": "bg-indigo-100 text-indigo-600",
  Cache: "bg-orange-100 text-orange-600",
  Ubiquitous: "bg-yellow-100 text-yellow-600",
  Essential: "bg-teal-100 text-teal-600",
  Robust: "bg-gray-100 text-gray-600",
  Modern: "bg-cyan-100 text-cyan-600",
  Containers: "bg-sky-100 text-sky-600",
  NoSQL: "bg-emerald-100 text-emerald-600",
  Minimalist: "bg-pink-100 text-pink-600",
};

const TechCard = ({ tech, addToStack, isInStack }) => {
  return (
    <div className={`border rounded-xl p-5 hover:shadow-lg transition-shadow ${isInStack ? "border-green-300 bg-green-50/30" : "border-gray-200"}`}>
      <div className="flex justify-between items-start mb-3">
        <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full ${
            badgeColors[tech.badge] || "bg-gray-100 text-gray-600"
          }`}
        >
          {tech.badge}
        </span>
      </div>
      <h3 className="font-bold text-lg">{tech.name}</h3>
      <p className="text-gray-500 text-sm mt-1 mb-4 line-clamp-2">
        {tech.description}
      </p>
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <span className="bg-gray-100 px-2 py-1 rounded">{tech.category}</span>
        <span>{tech.difficulty}</span>
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          {tech.rating}
        </span>
      </div>
      <button
        onClick={() => addToStack(tech)}
        disabled={isInStack}
        className={`w-full py-2.5 rounded-lg font-medium transition ${
          isInStack
            ? "bg-green-500 text-white cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isInStack ? "Added" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;
