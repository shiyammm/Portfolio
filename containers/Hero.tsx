import React from 'react';

const Hero = () => {
  return (
    <section className="hero w-full h-screen text-white flex-center">
      <div className="text-center font-canopee-regular text-3xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl ">
        <span className="inline-block ml-1 sm:ml-2 md:ml-3 xl:ml-4 2xl:ml-5">
          Let's
        </span>
        <span className="inline-block ml-1 sm:ml-2 md:ml-3 xl:ml-4 2xl:ml-5">
          Create
        </span>
        <br />
        <span className="inline-block ml-1 sm:ml-2 md:ml-3 xl:ml-4 2xl:ml-5 text-cyan">
          Awesome
        </span>
        <span className="inline-block ml-1 sm:ml-2 md:ml-3 xl:ml-4 2xl:ml-5">
          Work!
        </span>
      </div>
    </section>
  );
};

export default Hero;
