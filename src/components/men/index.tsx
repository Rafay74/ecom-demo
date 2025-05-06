import { bottomsData, topsData } from "../../data";
import ProductCard from "../women/product-card";

const MenSection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-16"> {/* consistent vertical spacing */}
        {[
          { title: "Tops", data: topsData },
          { title: "Bottom", data: bottomsData },
          { title: "Dresses", data: bottomsData },
          { title: "Shoes", data: bottomsData },
          { title: "Accessories", data: bottomsData },
          { title: "Brands", data: bottomsData },
        ].map((section, idx) => (
          <div key={idx} className="flex flex-col gap-8">
            <h2 className="text-4xl font-semibold">{section.title}:</h2>
            <div className="flex flex-wrap justify-center gap-10">
              {section.data.map((item, index) => (
                <ProductCard key={index} product={item} />
              ))}
            </div>
            {idx !== 5 && <hr className="w-full border-gray-200" />} {/* no hr after last section */}
          </div>
        ))}

      </div>
    </div>
  );
};

export default MenSection ;
