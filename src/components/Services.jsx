import Webimg from '../assets/WebMobileimg.png';
import Strategyimg from '../assets/DigitalStrategyimg.png';
const Services = () => {
    return (
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Web & Mobile Development Section */}
          <div className="grid md:grid-cols-2 items-center mb-20">
            <div className="order-2 md:order-1">
              <img src={Webimg} alt="Web Development" className="" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Web & Mobile App Development
              </h2>
              <p className="text-gray-600 mb-6">
                Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
              </p>
              <button className="bg-accent hover:bg-opacity-90 text-white px-6 py-2 rounded">
                LEARN MORE
              </button>
            </div>
          </div>
  
          {/* Digital Strategy Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Digital Strategy Consulting
              </h2>
              <p className="text-gray-600 mb-6">
                Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
              </p>
              <button className="bg-accent hover:bg-opacity-90 text-white px-6 py-2 rounded">
                LEARN MORE
              </button>
            </div>
            <div>
            <img src={Strategyimg} alt="Web Development" className="" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Services;