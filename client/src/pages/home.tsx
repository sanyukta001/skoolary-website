import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesOverview from "@/components/services-overview";
import AboutSection from "@/components/about-section";
import HowItWorks from "@/components/how-it-works";
import AppsSection from "@/components/apps-section";
import BenefitsSection from "@/components/benefits-section";
import Testimonials from "@/components/testimonials";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ServicesOverview />
      <AboutSection />
      <HowItWorks />
      <AppsSection />
      <BenefitsSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}
