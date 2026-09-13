import { toast, ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { Suspense, use, useState } from "react";
import SkeletonCard from "./components/SkeletonCard";
import YourStack from "./components/YourStack";
import TechCard from "./components/TechCard";

// fetching data

const fetchDataPromise = fetch("/data.json").then((res) => res.json());

function TechSection({ addToStack, stack }) {
  const technologies = use(fetchDataPromise);

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      <div className="flex-1 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <TechCard
              key={tech.id}
              tech={tech}
              addToStack={addToStack}
              isInStack={stack.some((item) => item.id === tech.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [stack, setStack] = useState([]);

  const addToStack = (tech) => {
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to stack!`);
  };

  const removeFromStack = (id) => {
    const tech = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    toast.info(`${tech?.name} removed from stack.`);
  };

  const removeAll = () => {
    setStack([]);
    toast.info("All technologies removed from stack.");
  };

  return (
    <div>
      {/* Toaster */}
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      {/* Home layout */}
      <Navbar />
      <Hero />

      {/* explore the technologies section */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Explore the <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <Suspense
            fallback={
              <div className="flex-1 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <SkeletonCard key={i} />
                  ))}
                </div>
              </div>
            }
          >
            <TechSection addToStack={addToStack} stack={stack} />
          </Suspense>
          <div className="lg:w-80 shrink-0 lg:sticky lg:top-24">
            <YourStack
              stack={stack}
              removeFromStack={removeFromStack}
              removeAll={removeAll}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
