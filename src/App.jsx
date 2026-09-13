import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
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

      {/* Main section */}

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
          <div className="lg:w-80 shrink-0 lg:sticky lg:top-24"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
