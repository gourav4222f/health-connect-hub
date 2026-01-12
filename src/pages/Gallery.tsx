import Navbar from '@/components/Navbar';
import GallerySection from '@/components/GallerySection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <GallerySection />
        <CTASection />
      </div>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Gallery;
