import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ServicesSection />
        <CTASection />
      </div>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Services;
