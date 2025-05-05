import { useLocation } from "react-router-dom";
import women from "../../assets/woman.jpg";

const MainSection = () => {
  const location = useLocation();
  const path = location.pathname;

  switch (path) {
    case "/":
      return (
        <div className="flex items-center justify-center min-h-screen bg-white">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] flex items-center justify-center rounded-full bg-gradient-radial">
            <div className="absolute inset-0 rounded-full bg-black opacity-50 blur-3xl z-0" />

            <div className="text-center text-white z-10 relative">
              <h1 className="text-6xl sm:text-7xl font-bold tracking-wide font-serif">
                FORSA
              </h1>
              <p className="text-xl sm:text-2xl mt-2 font-bold">
                Sell, Earn, Buy
              </p>
            </div>
          </div>
        </div>
      );

    case "/women":
      return (
        <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
          <img
            src={women}
            alt="Women's Section"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-black/30 z-0" />
          <div className="z-10 text-center text-white">
            <h1 className="text-6xl sm:text-7xl font-bold font-serif">FORSA</h1>
            <p className="text-2xl sm:text-3xl mt-2 font-light tracking-wide">
              Women’s Section
            </p>
          </div>
        </div>
      );
  }
};

export default MainSection;
