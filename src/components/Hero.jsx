import HeroImage from "../assets/HeroSection.png";
import HeroImagemb from "../assets/HeroImagemb.png";

const Hero = () => {
  return (
    <div className="w-full h-screen">
  
      <div
        className="hidden sm:block w-full h-full bg-cover"
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}
      />
   
      <div
        className="block sm:hidden w-full h-full bg-cover "
        style={{
          backgroundImage: `url(${HeroImagemb})`,
        }}
      />
    </div>
  );
};

export default Hero;
