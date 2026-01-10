import { Calendar, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Take Care of Your Health?
          </h2>
          <p className="text-primary-foreground/90 text-lg md:text-xl mb-10 leading-relaxed">
            Don't wait for tomorrow. Book your appointment today and let our 
            expert team of doctors take care of your health needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-6 text-lg gap-2"
              >
                <Phone className="w-5 h-5" />
                Call: +91 98765 43210
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
