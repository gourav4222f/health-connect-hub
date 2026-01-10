import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  { id: 1, title: 'Reception Area', category: 'facility' },
  { id: 2, title: 'Operation Theater', category: 'facility' },
  { id: 3, title: 'Patient Room', category: 'facility' },
  { id: 4, title: 'ICU Ward', category: 'facility' },
  { id: 5, title: 'Diagnostic Lab', category: 'facility' },
  { id: 6, title: 'Pharmacy', category: 'facility' },
];

// Using placeholder images with healthcare theme
const getImageUrl = (index: number) => {
  const images = [
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop',
  ];
  return images[index % images.length];
};

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding gradient-accent">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Facility
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Take a <span className="text-primary">Virtual Tour</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our world-class facilities designed for your comfort and care.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={getImageUrl(index)}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-heading font-bold text-primary-foreground text-lg">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-primary-foreground hover:text-secondary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={getImageUrl(selectedImage)}
            alt={galleryImages[selectedImage].title}
            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-elevated"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
