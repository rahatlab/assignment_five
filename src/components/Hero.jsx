import bannerImage from "../assets/banner-stack.png"

const Hero = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Build Your Ideal
              <br />
              <span className="gradient-text">Development Stack</span>
            </h1>
            <p className="mt-6 text-gray-600 text-lg max-w-xl">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits your
              next project.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="gradient-brand text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
                Explore Technologies
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-400 to-violet-400 rounded-3xl opacity-20 blur-3xl"></div>
              <img
                src={bannerImage}
                alt="Banner Stack"
                className="relative z-10 w-full"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="relative z-10 w-full hidden items-center justify-center h-80">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto gradient-brand rounded-2xl flex items-center justify-center opacity-80">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <p className="mt-4 text-gray-500 font-medium">Build Your Stack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
