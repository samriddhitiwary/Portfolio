import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full h-screen text-center overflow-hidden bg-black text-white" style={{ marginRight: '2rem' }}>
      {/* Title */}
      <h1 className="absolute top-[5%] left-1/2 transform -translate-x-1/2 text-3xl font-bold">
        Badges Earned
      </h1>

      {/* Slider */}
      <div
        className="absolute w-52 h-64 top-[20%] left-[48%] transform -translate-x-1/2 perspective-[1000px] animate-[autoRun_20s_linear_infinite]"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {Array.from({ length: 11 }).map((_, index) => (
          <div
            key={index}
            className="absolute inset-0"
            style={{
              transform: `rotateY(${index * (360 / 10)}deg) translateZ(550px)`,
            }}
          >
            <img
              src={`images/Share Badge (${13 + index}).png`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
