import CardSection from "./Card/card-section";
import HeroSection from "./Hero/hero-section";
import MemberSection from "./Member/member-section";
import ShopSection from "./Shop/shop-section";

const HomeSection = () => {
  return (
    <div className="flex flex-col ">
      <HeroSection />
      <CardSection />
      <ShopSection/>
      <MemberSection/>
      <ShopSection/>
    </div>
  );
};

export default HomeSection;
