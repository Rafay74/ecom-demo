import cover from "../../../assets/cover.jpg";

const MemberSection = () => {
  return (
    <div
      className=" bg-white min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
   
      <div className="absolute inset-0 bg-black/50 z-0" />

    
      <div className="flex flex-col items-center gap-4 text-center text-white relative z-10">
        <span className="text-7xl font-extrabold tracking-wide">
          BECOME A FORSA MEMBER
        </span>
        <div className="flex gap-4">
          <button className="border-2 border-white text-white p-4 mt-12 text-sm px-10 hover:bg-white hover:text-black transition">
            BUY
          </button>
          <button className="border-2 border-white text-white p-4 mt-12 text-sm px-10 hover:bg-white hover:text-black transition">
            SELL
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemberSection;
