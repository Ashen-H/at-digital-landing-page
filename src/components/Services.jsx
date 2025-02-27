import Webimg from '../assets/web-mobile-img.png';
import Strategyimg from '../assets/digital-strategy-img.png';
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
              <h2 className="text-title font-semibold font-poppins text-primary mb-4">
                Web & Mobile App Development
              </h2>
              <p className="text-black font-inter text-para mb-6">
                Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
              </p>
              <button className="bg-secondary hover:bg-orange-300 text-white px-6 py-2 rounded">
                LEARN MORE
              </button>
            </div>
            
          </div>
  
          {/* Digital Strategy Section */}
          <div className="grid md:grid-cols-2 gap-48 items-center">
            <div>
              <h2 className="text-title font-semibold font-poppins text-primary mb-4">
                Digital Strategy Consulting
              </h2>
              <p className="text-black font-inter text-para mb-6">
                Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
              </p>
              <button className="bg-secondary hover:bg-orange-300 text-white px-6 py-2 rounded">
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