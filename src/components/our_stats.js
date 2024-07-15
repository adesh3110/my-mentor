import React from "react";

function OurStats() {
  const stats = [
    {
      title: "200+",
      description: "Offers in IVY Leage School",
    },
    {
      title: "50+",
      description: "Offers in IVY Leage School",
    },
    {
      title: "500+",
      description: "Offers in IVY Leage School",
    },
    {
      title: "1000+",
      description: "Offers in IVY Leage School",
    },
    {
      title: "4000+",
      description: "Offers in IVY Leage School",
    },
  ];
  return (
    <div
      className='m-full'
      style={{
        backgroundColor: "#181c53",
      }}
    >
      <div className='flex flex-wrap justify-between mx-auto container'>
        {stats.map((e) => {
          return (
            <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/5 my-8 text-center'>
              <div className='title  text-white text-xl font-bold'>
                {e.title}
              </div>
              <div className='description text-sm text-gray-200'>
                {e.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurStats;
