import HeroImage from "../assets/hero-section.png";
import HeroImagemb from "../assets/hero-image-mb.png";
import Herosectiontab from "../assets/hero-section-tab.png";

const Hero = () => {
  return (
    <div className="lg:relative w-full lg:flex ">
      <div
        className="hidden lg:block w-full bg-cover h-screen"
        style={{ backgroundImage: `url(${HeroImage})` }}
      />
      <div
        className="hidden md:block lg:hidden h-[54vh] bg-cover w-full bg-no-repeat"
        style={{ backgroundImage: `url(${Herosectiontab})` }}
      />
      <div
        className="md:hidden w-full bg-cover h-[29vh]"
        style={{ backgroundImage: `url(${HeroImagemb})` }}
      />

      <div className="bottom-10 left-20 bg-gradient-to-r lg:absolute from-green-400 to-cyan-500 min-h-[300px] flex items-center justify-start p-4">
        <div className="max-w-2xl">
          <h1 className="text-white text-4xl md:text-mdTextsize font-bold leading-tight mb-6">
            We Crush Your Competitors, Goals, And Sales Records - Without The
            B.S.
          </h1>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200 uppercase text-sm tracking-wide">
            Get Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
