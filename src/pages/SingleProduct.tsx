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
import mountain3 from "../Images/mountain3.jpeg"
export default function HomePage() {

  return (
     <div className="">
        {/* <div className="sticky top-0 z-50">
  <Marquee />
</div> */}

      {/* <TopHeader/> */}
      <Header/>
      
<ProductPage/>
      {/* <Catelog/> */}
      <FeaturesSection/>
      <Footer/>
        {/* <h1 className="text-xl font-bold font-playfair text-[rgb(156,108,84)">Component a day challenge</h1> */}
     </div> 
  )
}
