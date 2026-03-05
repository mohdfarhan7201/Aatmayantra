// import React, { useState } from 'react';
// import thumb1 from '../../assets/video1.jpg';
// import thumb2 from '../../assets/video2.jpg';
// import thumb3 from '../../assets/video3.jpg';
// import thumb4 from '../../assets/video4.jpg';
// import thumb5 from '../../assets/video5.jpg';
// import thumb6 from '../../assets/video6.jpg';
// import video1 from '../../assets/health.mp4';
// import video2 from '../../assets/tutorial.mp4';
// import video3 from '../../assets/meditation.mp4';

// const FeaturedVideos = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [videoSrc, setVideoSrc] = useState('');
//   const [startIndex, setStartIndex] = useState(0);

//   const videosData = [
//     { thumb: thumb1, video: video1, tag: 'Health' },
//     { thumb: thumb2, video: video2, tag: 'Tutorial' },
//     { thumb: thumb3, video: video3, tag: 'Meditation' },
//     { thumb: thumb4, video: video3, tag: 'Food' },
//     { thumb: thumb5, video: video3, tag: 'Eat' },
//     { thumb: thumb6, video: video3, tag: 'Sleep' },
//   ];

//   const openVideo = (src) => {
//     setVideoSrc(src);
//     setIsPlaying(true);
//   };

//   const closeVideo = () => {
//     setIsPlaying(false);
//     setVideoSrc('');
//   };

//   const scrollLeft = () => {
//     setStartIndex((prev) => (prev - 1 + videosData.length) % videosData.length);
//   };

//   const scrollRight = () => {
//     setStartIndex((prev) => (prev + 1) % videosData.length);
//   };

//   const getVisibleCards = () => {
//     const visible = [];
//     for (let i = 0; i < 3; i++) {
//       const index = (startIndex + i) % videosData.length;
//       visible.push(videosData[index]);
//     }
//     return visible;
//   };

//   return (
//     <section className="text-center bg-[rgba(240,253,251,0.24)] py-12 sm:py-16 px-4 sm:px-6 lg:px-10 font-['Segoe_UI']">
//       <h2 className="text-[#7b1e14] text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide mb-8 sm:mb-10">
//         FEATURED YOGA VIDEOS
//       </h2>

//       <div className="flex justify-center items-center gap-4 sm:gap-5 flex-wrap">
//         <button className="text-6xl sm:text-6xl text-gray-800 hover:text-gray-700 z-10" onClick={scrollLeft}>
//           &#8249;
//         </button>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-[1000px] w-full">
//           {getVisibleCards().map((item, index) => (
//             <div
//               key={index}
//               onClick={() => openVideo(item.video)}
//               className="bg-white rounded-xl p-3 shadow-lg transition-transform hover:scale-[1.08] hover:translate-y-3 cursor-pointer"
//             >
//               <img
//                 src={item.thumb}
//                 alt={`Video ${index + 1}`}
//                 className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover rounded-xl"
//               />
//               <div className="mt-3 text-center">
//                 <span className="inline-block text-sm px-4 sm:px-5 py-[6px] rounded-full bg-[linear-gradient(to_right,rgba(29,116,100,1),rgba(55,218,188,1))] text-white font-semibold transition-transform hover:scale-[1.08] hover:bg-[#8b1e28]">
//                   {item.tag}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//         <button className="text-6xl sm:text-6xl text-gray-800 hover:text-gray-700 z-10" onClick={scrollRight}>
//           &#8250;
//         </button>
//       </div>

//       {isPlaying && (
//         <div className="fixed inset-0 bg-black bg-opacity-85 z-[2000] flex items-center justify-center px-4 sm:px-6">
//           <div className="relative w-full max-w-3xl">
//             <button
//               onClick={closeVideo}
//               className="absolute -top-6 sm:-top-8 -right-6 sm:-right-8 text-3xl sm:text-4xl text-white hover:text-red-500"
//             >
//               ×
//             </button>
//             <video src={videoSrc} controls autoPlay className="w-full rounded-lg" />
//           </div>
//         </div>
//       )}

//       <div className="mt-12 sm:mt-16 flex justify-center items-center px-2 sm:px-0">
//   <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-800 leading-relaxed text-center">
//     Craft Your Perfect Home <br />
//     <span className="font-bold text-[#333]">Yoga Oasis</span>
//   </h3>
// </div>

//     </section>
//   );
// };

// export default FeaturedVideos;




import React, { useState, useEffect } from 'react';
import thumb1 from '../../assets/video1.jpg';
import thumb2 from '../../assets/video2.jpg';
import thumb3 from '../../assets/video3.jpg';
import thumb4 from '../../assets/video4.jpg';
import thumb5 from '../../assets/video5.jpg';
import thumb6 from '../../assets/video6.jpg';
import video1 from '../../assets/health.mp4';
import video2 from '../../assets/tutorial.mp4';
import video3 from '../../assets/meditation.mp4';

const FeaturedVideos = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3); 

  const videosData = [
    { thumb: thumb1, video: video1, tag: 'Health' },
    { thumb: thumb2, video: video2, tag: 'Tutorial' },
    { thumb: thumb3, video: video3, tag: 'Meditation' },
    { thumb: thumb4, video: video3, tag: 'Food' },
    { thumb: thumb5, video: video3, tag: 'Eat' },
    { thumb: thumb6, video: video3, tag: 'Sleep' },
  ];

  // Media query effect to update cardsToShow
  useEffect(() => {
    const updateCardCount = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsToShow(1);
      } else if (width < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    updateCardCount(); // initial run
    window.addEventListener('resize', updateCardCount);
    return () => window.removeEventListener('resize', updateCardCount);
  }, []);

  const openVideo = (src) => {
    setVideoSrc(src);
    setIsPlaying(true);
  };

  const closeVideo = () => {
    setIsPlaying(false);
    setVideoSrc('');
  };

  const scrollLeft = () => {
    setStartIndex((prev) => (prev - 1 + videosData.length) % videosData.length);
  };

  const scrollRight = () => {
    setStartIndex((prev) => (prev + 1) % videosData.length);
  };

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < cardsToShow; i++) {
      const index = (startIndex + i) % videosData.length;
      visible.push(videosData[index]);
    }
    return visible;
  };

  return (
    <section className="text-center bg-[rgba(240,253,251,0.24)] py-12 sm:py-16 px-4 sm:px-6 lg:px-10 font-['Segoe_UI']">
      <h2 className="text-black text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide mb-8 sm:mb-10">
        FEATURED YOGA VIDEOS
      </h2>

      <div className="flex justify-center items-center gap-4 sm:gap-5 w-full">
        <button
          className="text-4xl sm:text-5xl md:text-6xl text-gray-800 hover:text-gray-700 z-10"
          onClick={scrollLeft}
        >
          &#8249;
        </button>

        <div className="flex  w-full max-w-[1000px]">
          <div className="flex transition-transform duration-300 w-full gap-4 sm:gap-6 justify-center">
            {getVisibleCards().map((item, index) => (
              <div
  key={index}
  onClick={() => openVideo(item.video)}
  className="w-full sm:w-[48%] lg:w-[32%] bg-white rounded-xl p-3 shadow-lg transition-transform duration-300 ease-in-out
    hover:scale-[1.05] hover:translate-y-10
    active:scale-[1.05] active:translate-y-2
    focus:scale-[1.05] focus:translate-y-2
    cursor-pointer"
>
                <img
                  src={item.thumb}
                  alt={`Video ${index + 1}`}
                  className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover rounded-xl"
                />
                <div className="mt-3 text-center">
                  <span className="inline-block text-sm px-4 py-[6px] rounded-full bg-[linear-gradient(to_right,rgba(29,116,100,1),rgba(55,218,188,1))] text-white font-semibold transition-transform hover:scale-[1.08] hover:bg-[#8b1e28]">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="text-4xl sm:text-5xl md:text-6xl text-gray-800 hover:text-gray-700 z-10"
          onClick={scrollRight}
        >
          &#8250;
        </button>
      </div>

      {isPlaying && (
        <div className="fixed inset-0 bg-black bg-opacity-85 z-[2000] flex items-center justify-center px-4 sm:px-6">
          <div className="relative w-full max-w-3xl">
            <button
              onClick={closeVideo}
              className="absolute -top-6 sm:-top-8 -right-6 sm:-right-8 text-3xl sm:text-4xl text-white hover:text-red-500"
            >
              ×
            </button>
            <video src={videoSrc} controls autoPlay className="w-full rounded-lg" />
          </div>
        </div>
      )}

      <div className="mt-12 sm:mt-16 flex justify-center items-center px-2 sm:px-0">
        <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-800 leading-relaxed text-center">
          Craft Your Perfect Home <br />
          <span className="font-bold text-[#333]">Yoga Oasis</span>
        </h3>
      </div>
    </section>
  );
};

export default FeaturedVideos;
