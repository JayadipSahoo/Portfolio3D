import { SpacemanCanvas } from ".";
import Position from "./Position";

const Hero = ({ scrollContainer }) => {
  return (
    <section className="parallax">
      <div className="parallax__content">
        <div className="container mx-auto px-4 pt-20 sm:pt-24 lg:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h1 className='font-medium text-white text-[20px] xs:text-[24px] sm:text-[32px] md:text-[36px] lg:text-[48px] 2xl:text-[64px] leading-[60px] 2xl:leading-[80px] text-shadow-lg'>
                JAYADIP SAHOO
              </h1>
              <Position />
            </div>
            <div className="flex lg:justify-end">
              <div className='font-medium text-[14px] sm:text-[18px] md:text-[22px] 2xl:text-[28px] sm:leading-[28px] md:leading-[32px] 2xl:leading-[40px] streaky-glow max-w-sm text-white text-left text-shadow-xl'>
                Full Stack Developer passionate about crafting efficient and scalable web solutions.
              </div>
            </div>
          </div>
        </div>
      </div>

      <img className="parallax__stars" src="./parallax/1Stars.svg" alt="" />
      <img className="parallax__planets" src="./parallax/2Planets.svg" alt="" />
      <img className="parallax__sun" src="./parallax/6Sun.svg" alt="" />
      <img className="parallax__mountain1" src="./parallax/3Mountain.svg" alt="" />
      <img className="parallax__mountain2" src="./parallax/4Mountain.svg" alt="" />
      <img className="parallax__crater" src="./parallax/5Crater.svg" alt="" />

      <div className="absolute inset-0 z-20">
        <SpacemanCanvas scrollContainer={scrollContainer} />
      </div>
    </section>
  );
};

export default Hero;
