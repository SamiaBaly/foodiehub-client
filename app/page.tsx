import FeaturedFoods from "@/components/FeaturedFoods";
import FoodCategories from "@/components/FoodCategories";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import PopularCategories from "@/components/PopularCategories";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Statistics from "@/components/Statistics";
import FAQ from "@/components/Newsletter";


export default function HomePage() {

  return (
    <main className="bg-slate-950 min-h-screen">
      

      <HeroSection />
      <FeaturedFoods />
      <FoodCategories />
      <WhyChooseUs />
      <PopularCategories />
      <HowItWorks />
      <Testimonials />
      <Statistics />
      <FAQ/>
     

    </main>
  );
}