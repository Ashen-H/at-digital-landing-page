import HeroImage from "../assets/HeroSection.png";
import HeroImagemb from "../assets/HeroImagemb.png";
import Herosectiontab from "../assets/Herosectiontab.png";


const Hero = () => {
  return (
    <div>
  
      <div className="hidden lg:block w-full bg-cover h-screen" style={{ backgroundImage: `url(${HeroImage})` }} />
      <div className="hidden md:block lg:hidden h-[69vh] w-full bg-no-repeat" style={{ backgroundImage: `url(${Herosectiontab})` }} />
      <div className="md:hidden w-full bg-cover h-[29vh]" style={{ backgroundImage: `url(${HeroImagemb})` }} />

      <div className="bg-gradient-to-r from-green-400 to-cyan-500 min-h-[300px] flex items-center justify-start p-4">
      <div className="max-w-2xl">
        <h1 className="text-white text-4xl md:text-mdTextsize font-bold leading-tight mb-6">
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </h1>
        
        <button 
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200 uppercase text-sm tracking-wide"
        >
          Get Free Consultation
        </button>
      </div>
    </div>


    </div>
  );
};

export default Hero;
