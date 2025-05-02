import clothes from "../../../assets/clothes.jpg";
const HeroSection = () => {
  return (
    <div className="bg-primary text-white p-6 w-full h-screen">
      <div>
        <div className="flex flex-col text-6xl">
          <span>Buy for less.</span>
          <span>Sell for more.</span>
        </div>
        <div className=" mt-10 flex flex-col sm:flex-row h-[400px]">
          <div className=" flex-1 h-full">
            <img
              src={clothes}
              alt="clothes"
              className="object-contain h-full"
            />
          </div>
          <div className="text-2xl flex-1 h-full">
            <div>
              <p>
                FORSA is a community-driven marketplace where you can buy, sell,
                or give away second-hand items with ease. From fashion and kids’
                clothing to home goods, accessories, and even tech, FORSA makes
                it simple to declutter, earn extra cash, or find great deals.
              </p>
              <br />
              <p>
                Born in the UAE, FORSA is now expanding across the Arab world
                bringing the power of circular shopping to more communities
                every day.
              </p>
            </div>
            <button className="border-2 border-white p-4 mt-12 text-sm px-10">
              REGISTER NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
