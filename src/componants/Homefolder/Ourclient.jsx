// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import { Pagination, Navigation } from "swiper/modules";
// import { useRef } from "react"; // Import useRef for accessing Swiper instance

// const Ourclient = () => {
//   // Create a reference for Swiper
//   const swiperRef = useRef(null);

//   // Array of clients data
//   const clients = [
//     {
//       name: "Amelia Joseph",
//       role: "Chief Manager",
//       img: "/Images/new1.jpg",
//       testimonial:
//         "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
//     },
//     {
//       name: "Jacob Joshua",
//       role: "Chief Manager",
//       img: "https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/662c092880a6d18c31995dfd_66236531e8288ee0657ae7a7_Business%2520Professional.webp",
//       testimonial:
//         "I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes.",
//     },
//     {
//       name: "Jacob Joshua",
//       role: "Chief Manager",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF6GBVcPOIgYaMV-MaGeNmYq118-bareQGM5pGluLyJHTBN5NviY00cg7r1uawJflV3P0&usqp=CAU",
//       testimonial:
//         "Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!",
//     },
//     {
//       name: "Jacob Joshua",
//       role: "Chief Manager",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDb1SAme1C5454xPcT3FjkHNHnM1z6kqNp703riGtaEldPYgplhB9Vwcs8LRpinkpODdY&usqp=CAU",
//       testimonial:
//         "Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!",
//     },
//   ];

//   // Function to navigate to the next slide
//   const handleNext = () => {
//     swiperRef.current.swiper.slideNext();
//   };

//   // Function to navigate to the previous slide
//   const handlePrev = () => {
//     swiperRef.current.swiper.slidePrev();
//   };

//   return (
//     <>
//       <div className="flex items-center justify-between lg:mx-[6vw] md:mx-[5vw] sm:mx-[3vw] mx-5 my-8">
//         <h2 className="text-xl md:text-5xl font-medium text-black">
//           What Our Client Said About Us
//         </h2>
//         <div className="flex gap-3">
//           <button
//             onClick={handlePrev}
//             className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-blue-700 hover:text-white transition"
//           >
//             <FaArrowLeft size={20} />
//           </button>
//           <button
//             onClick={handleNext}
//             className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-blue-700 hover:text-white transition"
//           >
//             <FaArrowRight size={20} />
//           </button>
//         </div>
//       </div>

//       <div className="flex justify-between items-center md:mt-10  lg:ml-[6vw] md:ml-[5vw] ml-3">
//         <Swiper
//           ref={swiperRef} // Attach the ref to the Swiper component
//           slidesPerView={3}
//           spaceBetween={50}
//           pagination={{ clickable: true }}
//           loop
//           freeMode={true}
//           autoplay={{
//             delay: 3000, // Set autoplay delay (in milliseconds)
//             disableOnInteraction: false, // Autoplay will not be disabled on interaction
//           }}
//           className="myswiper"
//           breakpoints={{
//             320: {
//               slidesPerView: 1,
//               spaceBetween: 10,
//             },
//             640: {
//               slidesPerView: 2.5,
//               spaceBetween: 30,
//             },
//             768: {
//               slidesPerView: 2.5,
//               spaceBetween: 30,
//             },
//             1024: {
//               slidesPerView: 2.5,
//               spaceBetween: 30,
//             },
//           }}
//         >
//           {clients.map((client, index) => (
//             <SwiperSlide key={index}>
//               <div className="hover:bg-[#3461FF] bg-[#F8F9FF] text-black hover:text-white duration-150 ease-in-out cursor-pointer rounded-3xl md:py-10 md:shadow-lg shadow-xl md:px-10 py-5 px-6 flex flex-col justify-between h-full">
//                 <div className="flex justify-start gap-6 items-center">
//                   <img
//                     className="lg:w-20 rounded-full lg:h-20 md:w-12 md:h-12 w-12 h-12 object-cover"
//                     src={client.img}
//                     alt={client.name}
//                   />
//                   <div className="flex flex-col">
//                     <p className="font-bold lg:text-3xl sm:text-xl text-base">
//                       {client.name}
//                     </p>
//                     <p className="font-medium lg:mt-2 lg:text-lg md:text-base text-sm">
//                       {client.role}
//                     </p>
//                   </div>
//                 </div>

//                 <p className="lg:mt-6 mt-5 opacity-85 text-justify lg:text-base text-sm tracking-wide">
//                   {client.testimonial}
//                 </p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </>
//   );
// };

// export default Ourclient;



























import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { useRef } from "react"; // Import useRef for accessing Swiper instance

const Ourclient = () => {
  // Create a reference for Swiper
  const swiperRef = useRef(null);

  // Array of clients data
  const clients = [
    {
      name: "Amelia Joseph",
      role: "Chief Manager",
      img: "/Images/new1.jpg",
      testimonial:
        "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
    },
    {
      name: "Jacob Joshua",
      role: "Chief Manager",
      img: "https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/662c092880a6d18c31995dfd_66236531e8288ee0657ae7a7_Business%2520Professional.webp",
      testimonial:
        "I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes.",
    },
    {
      name: "Jacob Joshua",
      role: "Chief Manager",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF6GBVcPOIgYaMV-MaGeNmYq118-bareQGM5pGluLyJHTBN5NviY00cg7r1uawJflV3P0&usqp=CAU",
      testimonial:
        "Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!",
    },
    {
      name: "Jacob Joshua",
      role: "Chief Manager",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDb1SAme1C5454xPcT3FjkHNHnM1z6kqNp703riGtaEldPYgplhB9Vwcs8LRpinkpODdY&usqp=CAU",
      testimonial:
        "Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!",
    },
  ];

  // Function to navigate to the next slide
  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  // Function to navigate to the previous slide
  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <>
      <div className="flex items-center justify-between lg:mx-[6vw] md:mx-[5vw] sm:mx-[3vw] mx-5 md:pt-12 md:pb-5 my-10">
        <h2 className="text-base lg:text-5xl md:text-4xl md:font-medium font-semibold text-black">
          What Our Client Said About Us
        </h2>
        <div className="flex sm:gap-3 gap-2">
          <button
            onClick={handlePrev}
            className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-8 h-8 flex items-center justify-center rounded-full bg-[#3461FF] text-white hover:bg-blue-700 hover:text-white transition"
          >
            <FaArrowLeft size={15} />
          </button>
          <button
            onClick={handleNext}
            className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-8 h-8 flex items-center justify-center rounded-full bg-[#3461FF] text-white hover:bg-blue-700 hover:text-white transition"
          >
            <FaArrowRight size={15} />
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center md:mt-10  lg:ml-[6vw] md:ml-[5vw] ml-3">
        <Swiper
          ref={swiperRef} // Attach the ref to the Swiper component
          slidesPerView={3}
          spaceBetween={50}
          pagination={{ clickable: true }}
          loop
          freeMode={true}
          autoplay={{
            delay: 3000, // Set autoplay delay (in milliseconds)
            disableOnInteraction: false, // Autoplay will not be disabled on interaction
          }}
          className="myswiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="hover:bg-[#3461FF] bg-[#F8F9FF] text-black hover:text-white duration-150 ease-in-out cursor-pointer rounded-3xl md:py-10 md:shadow-lg shadow-xl md:px-10 py-5 px-6 flex flex-col justify-between h-full">
                <div className="flex justify-start gap-6 items-center">
                  <img
                    className="lg:w-20 rounded-full lg:h-20 md:w-12 md:h-12 w-12 h-12 object-cover"
                    src={client.img}
                    alt={client.name}
                  />
                  <div className="flex flex-col">
                    <p className="font-bold lg:text-3xl sm:text-xl text-base">
                      {client.name}
                    </p>
                    <p className="font-medium lg:mt-2 lg:text-lg md:text-base text-sm">
                      {client.role}
                    </p>
                  </div>
                </div>

                <p className="lg:mt-6 mt-5 opacity-85 text-justify lg:text-base text-sm tracking-wide">
                  {client.testimonial}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Ourclient;
