import DealsSection from "../Categories/deals-section";

const ShopSection = () => {
  return (
    <div className=" bg-secondary h-screen p-14 mt-10 ">
      <div className="flex flex-col justify-start  gap-4">
      <div className="text-6xl font mb-6 ml-14">Shop the latest deals:</div>
      <DealsSection />

      {/* <div className="text-6xl font mb-6 ml-14">Shop by Category</div> */}
     


      </div>
    </div>
  );
};

export default ShopSection;
