import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import NumbersSection from '@/components/NumbersSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <NumbersSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
