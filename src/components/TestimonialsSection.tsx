import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Patient',
    content: 'The care I received at SRS Hospital was exceptional. The doctors and staff were compassionate and professional throughout my treatment. I am grateful for their excellent service.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Patient',
    content: 'I had my surgery here and the experience was wonderful. From admission to discharge, everything was seamless. The facilities are modern and the staff is very caring.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Patient',
    content: 'Best hospital in the area! The emergency response was quick and efficient. The doctors explained everything clearly and made sure I was comfortable.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 4,
    name: 'Sunita Devi',
    role: 'Patient',
    content: 'My whole family trusts SRS Hospital for our healthcare needs. The pediatric department is excellent and the doctors are very patient with children.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length);
  const nextSlide = () => goToSlide((currentIndex + 1) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            What Our <span className="text-primary">Patients</span> Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Real stories from patients who trusted us with their health.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card text-center relative">
                    {/* Quote Icon */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
                      <Quote className="w-6 h-6 text-primary-foreground" />
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center gap-1 mt-4 mb-6">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-foreground text-lg md:text-xl mb-8 italic leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                      />
                      <div className="text-left">
                        <h4 className="font-heading font-bold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
