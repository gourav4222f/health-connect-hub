import { ArrowRight, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-hospital.jpg';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="SRS Hospital Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4 pt-20">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-6 animate-fade-up backdrop-blur-sm border border-secondary/30">
            🏥 Your Health, Our Priority
          </span>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Compassionate Care,{' '}
            <span className="text-secondary">Advanced Medicine</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            At Shree Ratan Siddhivinayka Hospital, we combine cutting-edge technology 
            with compassionate care to provide world-class healthcare services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a href="#contact">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-lg gap-2 shadow-elevated"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="tel:+919876543210">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-6 text-lg gap-2 backdrop-blur-sm"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
