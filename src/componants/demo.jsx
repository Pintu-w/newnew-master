import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { GiPlayButton } from "react-icons/gi";
const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA]  text-black">
      <div className="lg:mx-[6vw] md:mx-[5vw] sm:mx-[3vw] mx-0 px-6 md:py-16 py-10 flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="w-full md:w-1/3 text-center md:text-left md:space-y-6">
          <div className="flex items-center justify-center md:justify-start md:mb-4">
            <div className="bg-blue-600 w-5 h-5 rounded-full  "></div>
            <GiPlayButton className="text-blue-600 w-10 h-10 -ml-2" />
            <span className="text-3xl font-bold">Artwork World</span>
          </div>

          <div className="flex justify-center md:justify-start md:gap-12 gap-8    ">
            <FaInstagramSquare className="text-blue-600 text-2xl cursor-pointer mt-5" />
            <FaTwitter className="text-blue-600 text-2xl cursor-pointer mt-5" />
            <FaFacebook className="text-blue-600 text-2xl cursor-pointer mt-5 mb-7" />
          </div>

          <button className="bg-blue-600 text-white px-12 md:py-4 py-1.5 rounded-full hover:bg-blue-600  ">
            Contact Us
          </button>
        </div>

        <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6 lg:ml-60 md:text-base text-sm font-medium">
          <ul className="lg:space-y-10 space-y-2.5">
            <li className="cursor-pointer">Work With Us</li>
            <li className="cursor-pointer">Advertise With Us</li>
            <li className="cursor-pointer">Support Us</li>
            <li className="cursor-pointer">Business Advices</li>
          </ul>

          <ul className="lg:space-y-10 space-y-2.5 text-right">
            <li className="cursor-pointer">Private Coaching</li>
            <li className="cursor-pointer">Our Work</li>
            <li className="cursor-pointer">Our Commitment</li>
            <li className="cursor-pointer">Our Team</li>
          </ul>

          <ul className="lg:space-y-10 space-y-2 md:block hidden">
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">FAQs</li>
            <li className="cursor-pointer">Report a Bug</li>
          </ul>
        </div>
      </div>

      <div className="bg-black text-white text-xs md:py-14 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center lg:px-14">
          <p className="text-center opacity-80 md:text-left">
            © 2022 Embrace, Inc. - All Rights Reserved
          </p>
          <div className="flex gap-4 opacity-80">
            <p className="cursor-pointer lg:mr-32 ">Terms of use</p>
            <p className="cursor-pointer">Privacy policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
