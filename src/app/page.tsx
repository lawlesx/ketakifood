import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import OrganicSoybeansSection from "@/components/OrganicSoybeansSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhyStandOutSection from "@/components/WhyStandOutSection";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <OrganicSoybeansSection />
      <WhyStandOutSection />
      <CTASection />
    </div>
  );
}
