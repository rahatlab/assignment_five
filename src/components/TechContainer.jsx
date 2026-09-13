import TechCard from "./TechCard";

const TechContainer = ({ technologies, addToStack }) => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Explore the <span className="gradient-text">Technologies</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech) => (
          <TechCard key={tech.id} tech={tech} addToStack={addToStack} />
        ))}
      </div>
    </div>
  );
};

export default TechContainer;
