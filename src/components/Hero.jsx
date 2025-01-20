import HeroImage from '../assets/HeroSection.png';

const Hero = () => {
  return (

  <div className="">
    <img src={HeroImage} alt="Logo" className="absolute w-full h-full object-cover" />
    
    <div className=" absolute bg-gradient-to-r from-green-400 to-cyan-500 w-[630px] h-[306px] flex items-center justify-start p-8">
      <div className="max-w-2xl">
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6">
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