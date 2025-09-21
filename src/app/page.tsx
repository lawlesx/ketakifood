import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OrganicSoybeansSection from "@/components/OrganicSoybeansSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhyStandOutSection from "@/components/WhyStandOutSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <OrganicSoybeansSection />
      <WhyStandOutSection />
      <CTASection />
      <Footer />
    </main>
  );
}
