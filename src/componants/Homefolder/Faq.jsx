import { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start lg:mx-[6vw] md:mx-[4vw] sm:mx-[3vw] mx-5 pt-14 lg:py-28 md:py-20 pb-12  ">
      <div className="w-full md:w-[45%] space-y-4">
        <div className="border-t border-b border-gray-300 py-4 flex flex-col items-start">
          <button
            className="w-full flex justify-between items-center lg:text-lg   font-semibold text-gray-900 focus:outline-none
   "
            onClick={() => toggleFAQ(0)}
          >
            How do I sign up for the project?
            <span className="w-6 h-6 mt-4 flex items-center justify-center bg-blue-500 text-white lg:text-lg  font-bold rounded-full shadow-md">
              {openIndex === 0 ? "−" : "+"}
            </span>
          </button>
          {openIndex === 0 && (
            <p className="text-gray-600 mt-2 text-base leading-relaxed">
              You can sign up by visiting our website and filling out the
              registration form.
            </p>
          )}
        </div>

        <div className="relative flex flex-col items-start py-4">
          <button
            className="w-full flex justify-between items-center lg:text-lg  font-semibold text-gray-900 focus:outline-none"
            onClick={() => toggleFAQ(1)}
          >
            What thing that I should prepare before starting?
            <span
              className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white text-xl 
      font-bold rounded-full shadow-md"
            >
              {openIndex === 1 ? "−" : "+"}
            </span>
          </button>
          {openIndex === 1 && (
            <p className="text-gray-600 mt-2 text-base leading-relaxed ">
              You should prepare all necessary documents and resources related
              to your project.
            </p>
          )}
          <div className="absolute  pb-5 bottom-0 w-full border-b border-gray-300 translate-y-2"></div>
        </div>

        <div className="border-b border-gray-300 py-4 pb-5 flex flex-col items-start">
          <button
            className="w-full flex justify-between items-center lg:text-lg  font-semibold text-gray-900 focus:outline-none"
            onClick={() => toggleFAQ(2)}
          >
            Does my company need help for marketing advices?
            <span className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white text-xl font-bold rounded-full shadow-md">
              {openIndex === 2 ? "−" : "+"}
            </span>
          </button>
          {openIndex === 2 && (
            <p className="text-gray-600 mt-2 text-base leading-relaxed">
              Yes, we offer marketing consultancy services for businesses
              looking to grow their brand.
            </p>
          )}
        </div>
      </div>

      <div className="w-full md:w-[45%] flex flex-col items-start mt-10 md:mt-0 md:pl-10 lg:pl-24">
        <h2 className="text-2xl lg:text-4xl md:text-3xl text-gray-900 mb-3 md:mb-4">
          How We Can Help You?
        </h2>
        <p className="text-gray-600 tracking-wide lg:text-lg md:text-base text-sm leading-relaxed mb-3 md:mb-4">
          Follow our newsletter. We will regularly update our latest project and
          availability.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-3 lg:mt-4 w-full">
          <div className="flex items-center w-full sm:max-w-md bg-gray-100 rounded-full shadow-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 px-4 lg:py-2.5 md:py-2 py-2.5 sm:py-3 bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none text-sm md:text-base"
            />
          </div>
          <button className="px-5 lg:py-3 md:py-2 sm:py-3 py-2.5 bg-blue-500 text-white text-sm md:text-lg rounded-full shadow-md hover:bg-blue-600 transition w-full sm:w-44">
            Lets Talk
          </button>
        </div>
        <a className="text-blue-500 ml-2 mt-4 text-sm md:text-lg font-bold hover:underline">
          More FAQ →
        </a>
      </div>
    </div>
  );
};

export default Faq;
