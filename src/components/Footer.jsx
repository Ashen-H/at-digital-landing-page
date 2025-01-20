import logoImage from '../assets/Logo.png';
const Footer = () => {
    return (
      <footer className="bg-primary text-white">
        <div className=" mx-auto px-9 py-9 lg:px-24 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-3 max-w-md">
            <img src={logoImage} alt="Logo" className="logo-image" />
              <p className="mb-4 text-para font-lato mt-4">
                Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
              </p>
            </div>
  
            {/* Technologies */}
            <div>
              <h4 className="font-semibold text-subtitle mb-4">Our Technologies</h4>
              <ul className="font-medium font-inter text-bullet">
                <a href=""><li className="mt-2">ReactJS</li></a>
                <a href=""><li className="mt-2">Gatsby</li></a>
                <a href=""><li className="mt-2">NextJS</li></a>
                <a href=""><li className="mt-2">NodeJS</li></a>
              </ul>

            </div>
  
            {/* Services */}
            <div>
              <h4 className="font-semibold text-subtitle mb-4">Our Services</h4>
              <ul className="font-medium font-inter text-bullet space-y-5 ">
                    <a href=""><li className="mt-2">Social Media Marketing</li></a>
                     <a href=""><li className="mt-2">Web & Mobile App Development</li></a>
                    <a href=""><li className="mt-2">Data & Analytics</li></a>
                     <a href=""><li className="mt-2">Google Marketing Solutions</li></a>
                </ul>

            </div>
          </div>
  
          {/* Bottom Links */}
          <div className="border-t border-white mt-8 pt-4 text-center md:text-left w-[305px] md:w-[630px] mx-auto">
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a href="/privacy" className="hover:text-secondary">Privacy Policy</a>
              <span className="hidden md:inline">|</span>
              <a href="/terms" className="hover:text-secondary">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;