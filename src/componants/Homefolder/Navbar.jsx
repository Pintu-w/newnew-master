import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { CSSTransition } from "react-transition-group";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isSideMenuOpen, setMenu] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setMenu(false);
  }, [location]);

  return (
    <>
      {/* laptop screen .... */}
      <div className="md:block hidden lg:mx-[6vw] md:mx-[4vw] sm:mx-[3vw] mx-0">
        <div className="flex justify-between items-center mt-3 ">
          <NavLink to="/" className="lg:text-3xl text-2xl font-bold">
            Artwork World
          </NavLink>
          <div>
            <ul className="flex space-x-[1.5vw] text-[1.3vw]">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-[#3461FF] font-semibold " : "text-black "
                }
              >
                Human Resource
              </NavLink>
              <NavLink
                to="/education"
                className={({ isActive }) =>
                  isActive ? "text-[#3461FF] font-semibold" : "text-black"
                }
              >
                Education
              </NavLink>
              <NavLink
                to="/itdepartment"
                className={({ isActive }) =>
                  isActive ? "text-[#3461FF] font-semibold " : "text-black"
                }
              >
                IT Department
              </NavLink>
              <NavLink
                to="/contactus"
                className={({ isActive }) =>
                  isActive ? "text-[#3461FF]  font-semibold" : "text-black "
                }
              >
                Contact Us
              </NavLink>
            </ul>
          </div>
          <div className="bg-[#3461FF] lg:py-3.5 md:py-2 sm:py-1.5 px-7 font-medium rounded-full text-white">
            Book A Call
          </div>
        </div>
      </div>

      <hr className="border-b border-gray-100 mt-4 " />

      {/* mobile version part */}
      <div className="fixed top-0 pt-4 pb-3 bg-white shadow-lg px-5  z-40 flex justify-between items-center w-full md:hidden ">
        {!isSideMenuOpen && (
          <>
            <NavLink to="/">
              <p className="font-bold">Artwork World</p>
            </NavLink>
            <section>
              <FiMenu
                onClick={() => setMenu(true)}
                className="text-3xl text-white bg-[#3461FF]  sm:w-10 p-1  sm:h-10 w-8 h-8  rounded-full cursor-pointer shadow-2xl border border-gray-100 "
              />
            </section>
          </>
        )}
      </div>
      <CSSTransition
        in={isSideMenuOpen}
        timeout={300}
        classNames="menu"
        unmountOnExit
      >
        <>
          <div className="fixed h-screen w-full z-[998] bg-black bg-opacity-50 backdrop-blur-sm top-0 left-0"></div>
          <CSSTransition
            in={isSideMenuOpen}
            timeout={300}
            classNames="menu"
            unmountOnExit
          >
            <div className="fixed h-screen overflow-hidden w-[70%] z-[999] bg-white top-0 right-0">
              <section className="text-black max-h-screen overflow-y-auto flex-col absolute left-0 top-0 h-screen p-8 gap-6 z-50 w-full text-center flex">
                <IoCloseOutline
                  onClick={() => setMenu(false)}
                  className={`mt-1 mb-12 right-3 top-4 w-10 h-10 text-4xl rounded-full cursor-pointer text-[#125400] absolute close-icon ${
                    isSideMenuOpen ? "fade-in" : "fade-out"
                  }`}
                />
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-[#3461FF] mt-16" : "text-black mt-16"
                  }
                >
                  Human Resource
                </NavLink>
                <NavLink
                  to="/education"
                  className={({ isActive }) =>
                    isActive ? "text-[#3461FF] " : "text-black "
                  }
                >
                  Education
                </NavLink>
                <NavLink
                  to="/itdepartment"
                  className={({ isActive }) =>
                    isActive ? "text-[#3461FF] " : "text-black"
                  }
                >
                  IT Department
                </NavLink>
                <NavLink
                  to="/contactus"
                  className={({ isActive }) =>
                    isActive ? "text-[#3461FF] " : "text-black "
                  }
                >
                  Contact Us
                </NavLink>

                <div className="bg-[#3461FF] py-1.5 px-7 font-medium rounded-full text-white">
                  Book A Call
                </div>
              </section>
            </div>
          </CSSTransition>
        </>
      </CSSTransition>
    </>
  );
};

export default Navbar;
