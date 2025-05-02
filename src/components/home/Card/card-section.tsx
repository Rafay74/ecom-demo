import { CARDS_ITEMS } from "../../../data";

const CardSection = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {CARDS_ITEMS.map((item, index) => (
        <div
          key={index}
          className="w-[400px] max-w-full h-[500px] border-4 border-white text-white flex flex-col bg-transparent  shadow-lg overflow-hidden"
        >
         
          <div className="flex flex-col justify-between h-full p-6">
            
            
            <div className="border-b border-white pb-4 text-center font-semibold text-2xl">
              {item.HEADER}
            </div>

            
            <div className="pt-4  text-center text-base font-medium space-y-4">
              <p>{item.TEXT}</p>
              <p>{item.TEXT2}</p>
            </div>

            
            <div className="w-full flex justify-center">
              <button className="px-8 py-3 rounded-full text-black bg-white font-semibold hover:bg-gray-100 transition">
                {item.BUTTON}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
