import Marquee from "../components/Marquee"
import TopHeader from "../components/TopHeader";
// import BannerImage from "../components/BannerImage";
import DynamicBanner from "../components/DynamicBanner";
export default function HomePage() {

  return (
     <div className="">
   
      <TopHeader/>
      <DynamicBanner/>
      {/* <BannerImage/> */}
      <Marquee/>
  
        {/* <h1 className="text-xl font-bold font-playfair text-[rgb(156,108,84)">Component a day challenge</h1> */}
     </div> 
  )
}
