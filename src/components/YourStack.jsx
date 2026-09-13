import StackItem from "./StackItem";

const YourStack = ({ stack, removeFromStack, removeAll }) => {
  return (
    <div className="border border-gray-200 rounded-xl p-6 sticky top-24">
      <h3 className="font-bold text-xl mb-1">Your Stack</h3>
      <p className="text-gray-500 text-sm mb-4">
        {stack.length > 0
          ? `${stack.length} Technology Selected`
          : "No technologies selected yet."}
      </p>

      {stack.length > 0 ? (
        <>
          <div className="space-y-3 mb-4">
            {stack.map((tech) => (
              <StackItem key={tech.id} tech={tech} removeFromStack={removeFromStack} />
            ))}
          </div>
          <button
            onClick={removeAll}
            className="w-full border border-pink-200 text-pink-500 py-2 rounded-lg font-medium hover:bg-pink-50 transition"
          >
            Remove All
          </button>
        </>
      ) : (
        <div className="border-2 border-dashed border-gray-200 rounded-lg py-8 text-center">
          <p className="text-gray-400">Your stack is empty.</p>
        </div>
      )}
    </div>
  );
};

export default YourStack;
