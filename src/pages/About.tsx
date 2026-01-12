import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import NumbersSection from '@/components/NumbersSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <AboutSection />
        <NumbersSection />
        <CTASection />
      </div>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default About;
