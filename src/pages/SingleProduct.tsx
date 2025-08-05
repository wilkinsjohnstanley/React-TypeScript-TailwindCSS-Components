import Marquee from "../components/Marquee"
// import TopHeader from "../components/TopHeader";
// import BannerImage from "../components/BannerImage";
import DynamicBanner from "../components/DynamicBanner";
import Carousel from "../components/Carousel";
import Catelog from "../components/Catalog";
import Header from "../components/Header";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import ProductPage from "../components/ProductPage";
export default function HomePage() {

  return (
     <div className="">
   
      {/* <TopHeader/> */}
      <Header/>
      
      {/* <Marquee/> */}
<ProductPage/>
      {/* <Catelog/> */}
      <FeaturesSection/>
      <Footer/>
        {/* <h1 className="text-xl font-bold font-playfair text-[rgb(156,108,84)">Component a day challenge</h1> */}
     </div> 
  )
}
