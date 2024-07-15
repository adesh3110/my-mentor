import React, { useEffect, useRef } from "react";

function CollabrationCollages() {
  const data1 = [
    "collage-11.png",
    "collage-5.png",
    "collage-14.png",
    "collage-13.png",
    "collage-2.png",
    "collage-3.png",
    "collage-4.png",
    "collage-18.png",
    "collage-8.png",
    "collage-13.png",
  ];
  const data2 = [
    "collage-18.png",
    "collage-8.png",
    "collage-14.png",
    "collage-13.png",
    "collage-13.png",
    "collage-11.png",
    "collage-5.png",
    "collage-2.png",
    "collage-3.png",
    "collage-4.png",
  ].reverse();

  const scollRef1 = useRef(null);
  const scollRef2 = useRef(null);

  useEffect(() => {
    const scrollContainer = scollRef2.current;
    if (scrollContainer) {
      scrollContainer.scrollLeft = scrollContainer.scrollWidth;
    }
  }, []);

  const handleMouseEnter = (ref) => {
    const scrollContainer = ref.current;
    if (scrollContainer) {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft = scrollContainer.scrollWidth;
    }
  };

  const handleMouseLeave = (ref) => {
    const scrollContainer = ref.current;
    if (scrollContainer) {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft = 0;
    }
  };

  const handleMouseEnter2 = (ref) => {
    const scrollContainer = ref.current;
    if (scrollContainer) {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft = 0;
    }
  };

  const handleMouseLeave2 = (ref) => {
    const scrollContainer = ref.current;
    if (scrollContainer) {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft = scrollContainer.scrollWidth;
    }
  };

  return (
    <div className='my-8 '>
      <div
        className='md:container mx-auto'
        onMouseEnter={() => {
          handleMouseEnter(scollRef1);
          handleMouseEnter2(scollRef2);
        }}
        onMouseLeave={() => {
          handleMouseLeave(scollRef1);
          handleMouseLeave2(scollRef2);
        }}
      >
        <div
          className='h-24 flex gap-4 overflow-x-auto hide-scrollbar'
          ref={scollRef1}
        >
          {data1.map((e) => {
            const imgSrc = require(`../assets/collage/${e}`);
            return (
              <div className='w-36 h-12 flex-shrink-0'>
                <img
                  src={imgSrc}
                  className='cover w-full border'
                  alt='Image of Collage'
                />
              </div>
            );
          })}
        </div>
        <div
          className='h-24 flex gap-4 overflow-x-auto hide-scrollbar'
          ref={scollRef2}
        >
          {data2.map((e) => {
            const imgSrc = require(`../assets/collage/${e}`);
            return (
              <div className='w-36 h-12 flex-shrink-0'>
                <img
                  src={imgSrc}
                  className='cover w-full border'
                  alt='Image of Collage'
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CollabrationCollages;
