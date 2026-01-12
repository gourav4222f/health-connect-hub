import { ArrowRight, Phone, Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-hospital-new.jpg';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="SRS Hospital Modern Building"
          className="w-full h-full object-cover scale-105"
        />
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container-custom px-4 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-6 animate-fade-up backdrop-blur-sm border border-secondary/30">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              24/7 Emergency Services Available
            </span>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Where{' '}
              <span className="relative">
                <span className="text-secondary">Healing</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="hsl(var(--secondary))" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              Meets Excellence
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl animate-fade-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
              At Shree Ratan Siddhivinayka Hospital, we combine cutting-edge technology 
              with compassionate care to provide world-class healthcare services for you and your family.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <a href="#contact">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-lg gap-2 shadow-elevated group"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="tel:+917028855846">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-6 text-lg gap-2 backdrop-blur-sm"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>

          {/* Right Side - Info Cards */}
          <div className="hidden lg:flex flex-col gap-4 animate-slide-in-right">
            {/* Emergency Card */}
            <div className="bg-card/95 backdrop-blur-md rounded-2xl p-6 shadow-elevated border border-border/50">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <Phone className="w-7 h-7 text-destructive" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-lg">Emergency Helpline</h3>
                  <p className="text-primary text-xl font-bold">+91 70288 55846</p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-card/95 backdrop-blur-md rounded-2xl p-6 shadow-elevated border border-border/50">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Clock className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-lg">Working Hours</h3>
                  <p className="text-muted-foreground">Open 24 Hours, 7 Days a Week</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-card/95 backdrop-blur-md rounded-2xl p-6 shadow-elevated border border-border/50">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-lg">Our Location</h3>
                  <p className="text-muted-foreground text-sm">Averni Chauraha, Baldeo, Mathura</p>
                </div>
              </div>
            </div>
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
