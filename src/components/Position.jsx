import React from 'react';

const produceSpans = (text, animation) => {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      className={`inline-block transform-style-3d origin-bottom ${animation} text-shadow-md`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
};

const Position = () => {
  return (
    <div className="relative cursor-default font-medium text-white text-[10px] xs:text-[12px] sm:text-[16px] md:text-[18px] 2xl:text-[24px] leading-[20px] 2xl:leading-[28px] w-full flex justify-center items-center">
      <div className="absolute inset-0 top-[-16px] sm:top-[-4px] lg:top-0 flex flex-col">
        <div className="text first absolute left-1 md:left-2 2xl:left-4 flex text-shadow-lg" aria-label="Full Stack Developer">
          {produceSpans("Full Stack Developer", "animate-textRotate1")}
        </div>
        <div className="text second absolute left-1 md:left-2 2xl:left-4 flex text-shadow-lg" aria-label="Web Developer">
          {produceSpans("Web Developer", "animate-textRotate2")}
        </div>
      </div>
    </div>
  );
};

export default Position;
