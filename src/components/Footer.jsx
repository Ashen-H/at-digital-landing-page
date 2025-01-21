import logoImage from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className=" mx-auto px-9 py-9 lg:px-24 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-3 max-w-md">
            <img src={logoImage} alt="Logo" className="logo-image" />
            <p className="mb-4 text-para font-lato mt-4">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-semibold text-subtitle mb-4">
              Our Technologies
            </h4>
            <ul className="font-medium font-inter text-bullet">
              <li className="mt-2">
                <a href="#">ReactJS</a>
              </li>
              <li className="mt-2">
                <a href="#">Gatsby</a>
              </li>
              <li className="mt-2">
                <a href="#">NextJS</a>
              </li>
              <li className="mt-2">
                <a href="#">NodeJS</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-subtitle mb-4">Our Services</h4>
            <ul className="font-medium font-inter text-bullet space-y-5">
              <li className="mt-2">
                <a href="#">Social Media Marketing</a>
              </li>
              <li className="mt-2">
                <a href="#">Web & Mobile App Development</a>
              </li>
              <li className="mt-2">
                <a href="#">Data & Analytics</a>
              </li>
              <li className="mt-2">
                <a href="#">Google Marketing Solutions</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-white mt-8 pt-4 text-center md:text-left w-[305px] md:w-[630px] mx-auto">
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="/privacy" className="hover:text-secondary">
              Privacy Policy
            </a>
            <span className="hidden md:inline">|</span>
            <a href="/terms" className="hover:text-secondary">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
