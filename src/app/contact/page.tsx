import ContactForm from "@/components/ContactForm";
import ContactHero from "@/components/ContactHero";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ContactPage() {
  return (
    <main>
      <Header />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </main>
  );
}
