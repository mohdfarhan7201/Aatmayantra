// import React from 'react';
// import team from '../../assets/team.svg';
// import course from '../../assets/courses.svg';
// import why_us from '../../assets/why-us.svg';

// const aboutItems = [
//   {
//     title: 'In the studio with the team',
//     description:
//       'Praesentium, dolores suscipit inventore ratione pariatur blanditiis quia reprehenderit esse.',
//     image: team,
//     align: 'left',
//   },
//   {
//     title: 'Our yoga courses',
//     description:
//       'Praesentium, dolores suscipit inventore ratione pariatur blanditiis quia reprehenderit esse.',
//     image: course,
//     align: 'center',
//   },
//   {
//     title: 'Why Yoga With Us?',
//     description:
//       'Praesentium, dolores suscipit inventore ratione pariatur blanditiis quia reprehenderit esse.',
//     image: why_us,
//     align: 'left',
//   },
// ];

// const About = () => {
//   return (
//     <section className="px-4 sm:px-6 md:px-20 py-10 sm:py-12">
      
//       <h2 className="text-2xl md:text-3xl mb-10 font-semibold">ABOUT US</h2>

//       {/* <div className="flex flex-col gap-8 sm:gap-10"> */}
//   <div className="flex flex-col gap-8 sm:gap-10 ml-4 sm:ml-20">

//         {aboutItems.map((item, index) => (
//           <div
//             key={index}
//             className={`flex flex-col sm:flex-row gap-4 sm:gap-6 items-start ${
//               item.align === 'center' ? 'justify-center text-center sm:text-left' : ''
//             }`}
//           >
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-24 h-24 sm:w-28 sm:h-28 rounded-md object-cover mx-auto sm:mx-0"
//             />
//             <div className="w-full sm:w-auto">
//               <h3 className="text-base sm:text-lg font-semibold text-teal-700">
//                 {item.title}
//               </h3>
//               <p className="text-sm text-gray-600 mt-2">
//                 {item.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default About;








import React from 'react';
import team from '../../assets/team.svg';
import course from '../../assets/courses.svg';
import why_us from '../../assets/why-us.svg';

const aboutItems = [
  {
    title: 'In the studio with the team',
    description:
      'Praesentium, dolores suscipit inventore ratione pariatur blanditiis quia reprehenderit esse.',
    image: team,
    align: 'left',
  },
  {
    title: 'Our yoga courses',
    description:
      'Praesentium, dolores suscipit inventore ratione pariatur blanditiis quia reprehenderit esse.',
    image: course,
    align: 'right',
  },
  {
    title: 'Why Yoga With Us?',
    description:
      'Praesentium, dolores suscipit inventore ratione pariatur blanditiis quia reprehenderit esse.',
    image: why_us,
    align: 'left',
  },
];

const About = () => {
  return (
    <section className="px-4 sm:px-6 md:px-20 py-10 sm:py-12">
      {/* Heading aligned to left */}
      <h2 className="text-2xl md:text-3xl mb-10 font-semibold text-center md:text-left">
        ABOUT US
      </h2>

<div className="flex flex-col gap-10 px-4 sm:px-30">
  {aboutItems.map((item, idx) => (
    <div
      key={idx}
      className={`flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 ${
        item.align === 'right' ? 'sm:flex-row-reverse' : ''
      }`}
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-24 h-24 sm:w-28 sm:h-28 rounded-md object-cover"
      />

      {/* Text */}
      <div className="text-center sm:text-left">
        <h3 className="text-base sm:text-lg font-semibold text-teal-700 lg:text-3xl">
          {item.title}
        </h3>
        <p className="text-mb text-gray-600 mt-1">{item.description}</p>
      </div>
    </div>
  ))}
</div>

         </section>
  );
};

export default About;
