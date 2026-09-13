import logoImage from "../assets/logo-text.png"
const Footer = () => {
  return (
    <footer className="border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              {/* <div className="w-8 h-8 gradient-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DS</span>
              </div> */}
              <span className="text-xl font-bold">
                <img src={logoImage} alt="" />
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-4">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-gray-700 transition">GitHub</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition">Twitter</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition">LinkedIn</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">PRODUCT</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-700 transition">Home</a></li>
              <li><a href="#" className="hover:text-gray-700 transition">Technologies</a></li>
              <li><a href="#" className="hover:text-gray-700 transition">Projects</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-700 transition">About</a></li>
              <li><a href="#" className="hover:text-gray-700 transition">Contact</a></li>
              <li><a href="#" className="hover:text-gray-700 transition">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">LEGAL</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-700 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-700 transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy;  Dev Stack. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-gray-700 transition">Privacy</a>
            <a href="#" className="hover:text-gray-700 transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
