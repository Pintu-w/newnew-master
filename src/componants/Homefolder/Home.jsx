// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import { Pagination, Navigation } from "swiper/modules";
// import HowItWorks from "./Howitworks";
// import Ourteam from "./Ourteam";
// import Ourclient from "./Ourclient";
// import Homebananer from "./Homebananer";
// import Faq from "./Faq";
// const Home = () => {
//   const images = [
//     { id: 1, image: "/Images/Vector.png" },
//     { id: 2, image: "/Images/Company logo (3).png" },
//     { id: 3, image: "/Images/Company logo.png" },
//     { id: 4, image: "/Images/Company logo (1).png" },
//     { id: 5, image: "/Images/Company logo (2).png" },
//     { id: 6, image: "/Images/Company logo (4).png" },
//     { id: 7, image: "/Images/Company logo (5).png" },
//     { id: 8, image: "/Images/Company logo (6).png" },
//     { id: 9, image: "/Images/Company logo (7).png" },
//     { id: 10, image: "/Images/Company logo (8).png" },
//   ];

//   return (
//     <>
//       <div className="">
//         {/* first part ... */}
//         <div className="flex justify-between items-center sm:flex-row md:gap-0 gap-10 flex-col lg:mt-16 md:mt-12 mt-20 lg:mb-32 md:mb-24 mb-16 lg:mx-[6vw] md:mx-[5vw] sm:mx-[3vw] mx-5">
//           <div className="lg:w-[50%]  md:w-[45%] w-full  flex md:justify-start justify-center items-start flex-col">
//             <p className="lg:text-8xl md:text-7xl text-5xl tracking-wide font-bold">
//               We Take <br />
//               Care Of <br />
//               Your Brand
//             </p>
//             <p className="md:mt-4 mt-2 opacity-55 tracking-wide lg:text-xl md:text-sm text-xs">
//               We care about our work and we care about our clients.
//             </p>
//             <div className="lg:mt-9 md:mt-6 mt-5 flex justify-start dm:gap-5  gap-2 items-center">
//               <input
//                 type="email"
//                 placeholder="Enter Your Email"
//                 className="border border-gray-300 lg:w-80 lg:h-12 md:h-10 px-5 h-10 bg-gray-50 placeholder:text-sm rounded-full"
//               />
//               <button
//                 type="button"
//                 className="bg-[#3461FF] text-white rounded-full lg:h-12 md:text-base text-xs md:h-10 h-9 lg:w-32 md:w-24 w-16"
//               >
//                 Let's Talk
//               </button>
//             </div>
//           </div>
//           <div className="lg:w-[50%] md:w-[45%] w-full flex justify-center items-center ">
//             <img src="/Images/Image.png" />
//           </div>
//         </div>

//         {/* company part ... */}
//         <div className="bg-[#FAFAFA] overflow-hidden">
//           <p className="text-center md:pt-16 pt-7 lg:text-[2.5vw] md:text-[3.6vw] text-2xl tracking-wide font-medium">
//             Companies we Work with
//           </p>
//           <div className="relative flex items-center lg:mx-[6vw] md:mx-[5vw] sm:mx-[3vw] mx-0  sm:pt-12 pt-2">
//             <div className="scroll-wrapper">
//               <div className="scroll-content">
//                 {[...images, ...images, ...images].map((image, index) => (
//                   <div
//                     className="image-wrapper flex justify-center gap-12 items-center"
//                     key={index}
//                   >
//                     <img
//                       className="sm:w-28 w-20"
//                       src={image.image}
//                       alt={`Image ${index}`}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="relative flex items-center lg:mx-[6vw] md:mx-[5vw] sm:mx-[3vw] mx-0 sm:pt-5 sm:pb-20 pb-6">
//             <div className="scroll-wrapper">
//               <div className="scroll-content">
//                 {[...images, ...images, ...images].map((image, index) => (
//                   <div
//                     className="image-wrapper flex justify-center gap-12 items-center"
//                     key={index}
//                   >
//                     <img
//                       className="sm:w-28 w-20"
//                       src={image.image}
//                       alt={`Image ${index}`}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* commnunity ... */}
//         <div className="lg:mx-[8vw] md:mx-[5vw] sm:mx-[3vw] mx-5 lg:mt-28 md:mt-24 mt-8 md:gap-0 gap-8 lg:mb-28 md:mb-24 mb-12 flex sm:justify-between justify-center sm:flex-row flex-col-reverse sm:items-start items-center">
//           <div className="sm:w-[40%] w-full">
//             <div
//               className="flex justify-between items-center
//       "
//             >
//               <div className="font-bold lg:text-7xl md:text-5xl text-4xl">
//                 245%
//                 <p className="text-xs opacity-55 ">
//                   More revenues for the brand
//                 </p>
//               </div>
//               <div className="font-bold lg:text-7xl md:text-5xl text-4xl">
//                 130K
//                 <p className="text-xs opacity-55">Audiences reached </p>
//               </div>
//             </div>
//             <div className="flex  justify-between items-center  md:mt-14 mt-9">
//               <div className="font-bold lg:text-7xl md:text-5xl text-4xl">
//                 50+
//                 <p className="text-xs opacity-55">brands trust us</p>
//               </div>
//               <div className="font-bold lg:text-7xl md:text-5xl text-4xl">
//                 24+
//                 <p className="text-xs opacity-55">Worldwide awards</p>
//               </div>
//             </div>
//           </div>
//           <div className="sm:w-[50%] w-full tracking-wide">
//             <p className="font-medium tracking-wide text-center md:text-start lg:text-7xl md:text-5xl text-4xl">
//               commitments
//             </p>
//             <p className="md:mt-8 mt-1.5 font-light opacity-60 text-center md:text-start  lg:text-base sm:text-sm text-xs ">
//               We are committed to working with you collaboratively to understand
//               your goals and create a strategy that will achieve them.
//             </p>
//             <div className=" font-bold lg:mt-10 md:mt-8 mt-3 text-[#3461FF] text-center">
//               Learn More<i className="ri-arrow-right-line"></i>
//             </div>
//           </div>
//         </div>

//         <HowItWorks />
//         {/* our work ... */}
//         <div className="mt-12 md:mt-28 lg:mx-[6vw] md:mx-[4vw] sm:mx-[3vw] mx-5">
//           <div className="flex justify-center items-center flex-col">
//             <p className="font-medium lg:text-[4vw] md:text-[5vw] text-4xl tracking-wide">
//               Our Work
//             </p>
//             <p className="tracking-wide md:mt-4 md:text-base text-xs">
//               A glimpse of our portfolio
//             </p>
//           </div>

//           <div className="flex justify-between items-center md:mt-10 mt-5">
//             <Swiper
//               slidesPerView={3}
//               spaceBetween={50}
//               pagination={{ clickable: true }}
//               loop
//               freeMode={true}
//               className="myswiper"
//               breakpoints={{
//                 320: {
//                   slidesPerView: 1,
//                   spaceBetween: 10,
//                 },
//                 640: {
//                   slidesPerView: 2,
//                   spaceBetween: 30,
//                 },
//                 768: {
//                   slidesPerView: 3,
//                   spaceBetween: 30,
//                 },
//                 1024: {
//                   slidesPerView: 3,
//                   spaceBetween: 30,
//                 },
//               }}
//             >
//               <SwiperSlide>
//                 <div className="">
//                   <img src="/Images/image3.jpeg" />
//                   <p className="text-center md:mt-3 w-full  mt-5 md:text-2xl text-2xl font-medium">
//                     Human Resource
//                   </p>
//                 </div>
//               </SwiperSlide>

//               <SwiperSlide>
//                 <div>
//                   <img src="/Images/image2.jpeg" />
//                   <p className="text-center md:mt-3 mt-5 md:text-2xl text-2xl font-medium">
//                     Education
//                   </p>
//                 </div>
//               </SwiperSlide>

//               <SwiperSlide>
//                 <div>
//                   <img src="/Images/image2.jpeg" />
//                   <p className="text-center md:mt-3 mt-5 md:text-2xl text-2xl font-medium">
//                     It Department
//                   </p>
//                 </div>
//               </SwiperSlide>
//             </Swiper>
//           </div>

//           <div className="flex justify-center items-center mt-10 ">
//             <button className="bg-blue-500 text-white text-xl font-medium px-12 py-4 rounded-full hover:bg-blue-600 transition duration-300">
//               See More
//             </button>
//           </div>
//         </div>

//         {/* bananer ... */}
//         <div className="md:mt-20 mt-9 lg:mx-[6vw] md:mx-[5vw] sm:mx-[3vw] mx-5  flex justify-center">
//           <img className="w-full" src="/Images/CTA Banner.png" />
//         </div>
//       </div>

//       <Ourteam />

//       <Ourclient />

//       <Homebananer />

//       <Faq />
//     </>
//   );
// };

// export default Home;

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import HowItWorks from "./Howitworks";
import Ourteam from "./Ourteam";
import Ourclient from "./Ourclient";
import Homebananer from "./Homebananer";
import Faq from "./Faq";

const Home = () => {
  const images = [
    { id: 1, image: "/Images/Vector.png" },
    { id: 2, image: "/Images/Company logo (3).png" },
    { id: 3, image: "/Images/Company logo.png" },
    { id: 4, image: "/Images/Company logo (1).png" },
    { id: 5, image: "/Images/Company logo (2).png" },
    { id: 6, image: "/Images/Company logo (4).png" },
    { id: 7, image: "/Images/Company logo (5).png" },
    { id: 8, image: "/Images/Company logo (6).png" },
    { id: 9, image: "/Images/Company logo (7).png" },
    { id: 10, image: "/Images/Company logo (8).png" },
  ];

  return (
    <>
      <div className="">
        {/* first part ... */}
        <div className="flex justify-between items-center sm:flex-row md:gap-0 gap-10 flex-col lg:mt-16 md:mt-12 mt-20 lg:mb-32 md:mb-24 mb-16 lg:mx-[6vw] md:mx-[5vw] sm:mx-[3vw] mx-5">
          <div className="lg:w-[50%] md:w-[45%] w-full flex md:justify-start justify-center items-start flex-col">
            <p className="lg:text-8xl md:text-6xl text-5xl tracking-wider font-bold">
              We Take <br />
              Care Of <br />
              Your Brand
            </p>
            <p className="md:mt-4 mt-2 opacity-55 tracking-wide lg:text-xl md:text-sm text-xs">
              We care about our work and we care about our clients.
            </p>
            <div className="lg:mt-9 md:mt-6 mt-5 flex justify-start dm:gap-5 gap-2 items-center">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="border border-gray-300 lg:w-80 lg:h-12 md:h-10 px-5 h-10 bg-gray-50 placeholder:text-sm rounded-full"
              />
              <button
                type="button"
                className="bg-[#3461FF] text-white rounded-full lg:h-12 md:text-base text-[10px] md:h-10 h-8 lg:w-32 md:w-24 w-16"
              >
                Let's Talk
              </button>
            </div>
          </div>
          <div className="lg:w-[50%] md:w-[45%] w-full flex justify-center items-center ">
            <img src="/Images/Image.png" />
          </div>
        </div>

        {/* Our Work Section with Swiper and Pagination */}
        <div className="mt-12 md:mt-24 lg:mx-[6vw] md:mx-[4vw] sm:mx-[3vw] mx-5">
          <div className="flex justify-center items-center flex-col">
            <p className="font-semibold lg:text-[4vw] md:text-[5vw] text-4xl tracking-wider">
              Our Work
            </p>
            <p className="tracking-wide md:mt-4 md:text-base text-xs">
              A glimpse of our portfolio
            </p>
          </div>

          <div className="flex justify-between items-center md:mt-10 mt-5">
            <Swiper
              slidesPerView={3}
              spaceBetween={50}
              pagination={{ clickable: true }}
              loop
              freeMode={true}
              modules={[Pagination]}
              className="myswiper"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide>
                <div className="">
                  <img src="/Images/image3.jpeg" />
                  <p className="text-center md:mt-3 w-full mt-1  md:text-2xl text-xl font-medium">
                    Human Resource
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  <img src="/Images/image2.jpeg" />
                  <p className="text-center md:mt-3 mt-1 md:text-2xl text-xl font-medium">
                    Education
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  <img src="/Images/image2.jpeg" />
                  <p className="text-center md:mt-3 mt-1 md:text-2xl text-xl font-medium">
                    IT Department
                  </p>
                </div>
              </SwiperSlide>
              
              <div className="mt-7 md:mt-0"></div>
            </Swiper>
          </div>

          <div className="flex justify-center items-center  mt-2">
            <button className="lg:mt-20 md:mt-10 sm:mt-10 mt-4 lg:px-10 lg:py-3 lg:text-2xl text-sm py-2 px-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              See More
            </button>
          </div>
        </div>

        {/* Banner Section */}
        <div className="md:mt-20 mt-9 lg:mx-[6vw] md:mx-[5vw] sm:mx-[3vw] mx-5 flex justify-center">
          <img className="w-full" src="/Images/CTA Banner.png" />
        </div>
      </div>

      <Ourteam />
      <Ourclient />
      <Homebananer />
      <Faq />
    </>
  );
};

export default Home;
