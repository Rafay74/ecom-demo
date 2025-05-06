import logo from "../../assets/logo.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import { FOOTER_DATA } from "../../data";

const Footer = () => {
  return (
    <footer className="bg-primary text-white w-full  py-12 flex flex-col gap-12">
      <div className="flex flex-col md:flex-row items-start  px-12 gap-6">
        <img
          src={logo}
          alt="Forsa Logo"
          loading="lazy"
          className="w-32 h-auto max-w-[150px]"
        />
        <div>
          <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">
            Forsa, a second hand
          </h2>
          <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">
            platform.
          </h2>
        </div>
      </div>
      <div className="flex flex-col  md:flex-row justify-start md:justify-between items-start gap-10 md:gap-20  md:px-12">
        {FOOTER_DATA.map((item, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-semibold mb-2">
              {item.title}
            </span>
            <div className="flex flex-col text-left text-sm sm:text-base gap-1 pl-1">
              <span>{item.text}</span>
              <span>{item.text2}</span>
              <span>{item.text3}</span>
            </div>
          </div>
        ))}
      </div>

      <div className=" border-white border-t-8 border-b-8 py-11">
        <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto px-6 sm:px-8 md:px-10 lg:px-20 xl:px-32">
          <div className="flex gap-2 items-center">
            <span className="text-2xl">Get Social</span>
            <div className="flex items-center gap-2 hover:cursor-pointer">
              <img src={facebook} alt="" className="w-10 h-10" />
              <img src={twitter} alt="" className="w-10 h-10" />
              <img src={instagram} alt="" className="w-10 h-10" />
            </div>
          </div>
          <div>
            <span className="text-2xl hover:cursor-pointer">Contact us</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
