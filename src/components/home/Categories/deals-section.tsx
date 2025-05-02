import { SHOPS_ITEMS } from '../../../data';


const DealsSection = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-6">
      {SHOPS_ITEMS.map((item) => (
        <div
          key={item.id}
          className="bg-white overflow-hidden w-80 max-w-full"
        >
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-60 object-cover"
          />

          <div className="p-4 space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">{item.brand}</h3>
            <p className="text-gray-600">{item.title}</p>

            <p className="text-primary font-semibold mt-2">{item.price}</p>

            <div className="text-sm text-gray-500 mt-1">
              <p>{item.size}</p>
              <p>{item.condition}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DealsSection;
