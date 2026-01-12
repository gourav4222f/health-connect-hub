import { 
  Heart, Brain, Bone, Baby, Eye, Stethoscope, 
  Pill, Activity, Phone, MessageCircle 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import cardiologyImg from '@/assets/service-cardiology.jpg';
import neurologyImg from '@/assets/service-neurology.jpg';
import orthopedicsImg from '@/assets/service-orthopedics.jpg';
import pediatricsImg from '@/assets/service-pediatrics.jpg';

const services = [
  {
    icon: Heart,
    title: 'Cardiology',
    description: 'Comprehensive heart care with advanced diagnostic and treatment facilities.',
    image: cardiologyImg,
  },
  {
    icon: Brain,
    title: 'Neurology',
    description: 'Expert care for brain and nervous system disorders.',
    image: neurologyImg,
  },
  {
    icon: Bone,
    title: 'Orthopedics',
    description: 'Specialized bone and joint care, including surgeries and rehabilitation.',
    image: orthopedicsImg,
  },
  {
    icon: Baby,
    title: 'Pediatrics',
    description: 'Dedicated healthcare for infants, children, and adolescents.',
    image: pediatricsImg,
  },
  {
    icon: Eye,
    title: 'Ophthalmology',
    description: 'Complete eye care services from check-ups to surgeries.',
    image: null,
  },
  {
    icon: Stethoscope,
    title: 'General Medicine',
    description: 'Primary healthcare and preventive medicine services.',
    image: null,
  },
  {
    icon: Activity,
    title: 'Emergency Care',
    description: '24/7 emergency services with rapid response teams.',
    image: null,
  },
  {
    icon: Pill,
    title: 'Pharmacy',
    description: 'In-house pharmacy with quality medicines at affordable prices.',
    image: null,
  },
];

const ServicesSection = () => {
  const phoneNumber = '917028855846';
  const whatsappMessage = 'Hello, I would like to book an appointment at Shree Ratan Siddhivinayaka Hospital.';

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Comprehensive <span className="text-primary">Healthcare</span> Services
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a wide range of medical services to meet all your healthcare needs 
            under one roof with expert specialists.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 group border border-border/50 overflow-hidden"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Image or Icon Header */}
              {service.image ? (
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-32 gradient-hero flex items-center justify-center">
                  <div className="w-16 h-16 rounded-xl bg-primary-foreground/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a href={`tel:+${phoneNumber}`} className="flex-1">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full gap-1 text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Phone className="w-4 h-4" />
                      Call
                    </Button>
                  </a>
                  <a 
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button 
                      size="sm" 
                      className="w-full gap-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
