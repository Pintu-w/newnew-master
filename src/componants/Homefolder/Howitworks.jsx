import React from "react";
import {
  FaChessKnight,
  FaBullseye,
  FaRulerCombined,
  FaUserTie,
} from "react-icons/fa";

const Howitworks = () => {
  return (
    <div className='lg:mx-[8vw] md:mx-[5vw] sm:mx-[3vw] mx-5 '>
    <div className='flex md:justify-between justify-start md:gap-0 gap-10 md:flex-row flex-col items-start'>
    <div className='lg:w-[50%] md:w-[40%] w-full'>
    <h2 className="md:text-5xl text-3xl md:text-start text-center  text-black">
        How It Works
      </h2>
      <p className="text-gray-600 mt-4 text-xs md:text-base md:text-start opacity-60 tracking-wide text-center max-w-2xl lg:w-[450px]">
        We believe that the best way to create successful marketing campaigns is
        to work closely with our clients to understand their goals and
        challenges.
      </p>

      <div className="mt-5">
          <img src="/Images/Rectangle 160.png" className="rounded-lg  " />
        </div>
    
    
    
    </div>
    <div className='md:w-[50%] w-full mt-5 flex flex-col lg:space-y-12 space-y-7'>
        <div className="flex justify-start gap-4 items-start" >
                  <div className="bg-blue-600 md:p-4 p-2 rounded-xl">
                    <FaUserTie className="text-white text-4xl" />
                  </div>
                  <div>
                    <h3 className="md:text-xl text-base text-black md:mb-2 ml-2">
                      Discovery
                    </h3>
                    <p className=" md:text-sm text-xs opacity-65 ml-2">
                      We meet with you to learn about your business, your target
                      audience
                    </p>
                    <p className=" md:text-sm text-xs opacity-65 ml-2">
                      {" "}
                      and your target audience
                    </p>
                  </div>
                </div>

        
                      <div className="flex justify-start gap-4 items-start">
                              <div className="bg-blue-600 md:p-4 p-2 rounded-xl">
                                <FaChessKnight className="text-white text-4xl" />
                              </div>
                              <div>
                                <h3 className="md:text-xl text-base text-black md:mb-2 ml-2">
                                  Strategy
                                </h3>
                                <p className=" md:text-sm text-xs opacity-65 ml-2">
                                  We develop a customized marketing strategy that is based
                                </p>
                                <p className=" md:text-sm text-xs opacity-65 ml-2">
                                  {" "}
                                  on your unique needs and goals.
                                </p>
                              </div>
                            </div>


                                <div className="flex justify-start gap-4 items-start">
                                        <div className="bg-blue-600 md:p-4 p-2 rounded-xl">
                                          <FaBullseye className="text-white text-4xl" />
                                        </div>
                                        <div>
                                          <h3 className="md:text-xl text-base text-black md:mb-2 ml-2">
                                            Execution
                                          </h3>
                                          <p className=" md:text-sm text-xs opacity-65 ml-2">
                                            We execute our strategy using the latest digital marketing
                                          </p>
                                          <p className=" md:text-sm text-xs opacity-65 ml-2">
                                            {" "}
                                            tools and techniques.
                                          </p>
                                        </div>
                                      </div>
                            
                                      <div className="flex justify-start gap-4 items-start">
                                        <div className="bg-blue-600 md:p-4 p-2 rounded-xl">
                                          <FaRulerCombined className="text-white text-4xl" />
                                        </div>
                                        <div>
                                          <h3 className="md:text-xl text-base text-black md:mb-2 ml-2">
                                            Measurement
                                          </h3>
                                          <p className=" md:text-sm text-xs opacity-65 ml-2">
                                            We track the results of our campaigns so that we can make
                                          </p>
                                          <p className=" md:text-sm text-xs opacity-65 ml-2">
                                            {" "}
                                            adjustments as needed.
                                          </p>
                                        </div>
                                      </div>
               

      
    
    </div>


    </div>
      
    </div>
  )
}

export default Howitworks
