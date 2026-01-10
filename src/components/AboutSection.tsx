import { Heart, Shield, Users, Award, CheckCircle } from 'lucide-react';
import aboutTeamImage from '@/assets/about-team.jpg';

const features = [
  {
    icon: Heart,
    title: 'Patient-Centric Care',
    description: 'We put our patients first, ensuring personalized treatment plans.',
  },
  {
    icon: Shield,
    title: 'Advanced Technology',
    description: 'State-of-the-art medical equipment for accurate diagnostics.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Highly skilled doctors and medical professionals.',
  },
  {
    icon: Award,
    title: 'Accredited Excellence',
    description: 'Recognized for quality healthcare and patient safety.',
  },
];

const highlights = [
  'NABH Accredited Hospital',
  'Multi-Specialty Services',
  'Modern Infrastructure',
  'Affordable Healthcare',
  'Insurance Tie-ups',
  '24/7 Emergency Services',
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding gradient-accent overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Your Trusted Healthcare Partner Since{' '}
              <span className="text-primary">2010</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Shree Ratan Siddhivinayka Hospital (SRS) has been serving the community 
              with dedication and excellence. Our mission is to provide accessible, 
              affordable, and high-quality healthcare to every patient who walks 
              through our doors.
            </p>

            {/* Image with Overlay */}
            <div className="relative rounded-2xl overflow-hidden mb-8 group">
              <img 
                src={aboutTeamImage} 
                alt="Our Medical Team"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-primary-foreground font-heading font-bold text-lg">
                  50+ Expert Doctors & Specialists
                </p>
                <p className="text-primary-foreground/80 text-sm">
                  Dedicated to your health and well-being
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Features Grid & Mission/Vision */}
          <div className="space-y-6 animate-slide-in-right">
            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-card p-5 rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-base mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-primary p-6 rounded-xl shadow-elevated">
                <h3 className="font-heading font-bold text-primary-foreground text-xl mb-2">
                  Our Mission
                </h3>
                <p className="text-primary-foreground/90 text-sm leading-relaxed">
                  To deliver compassionate, patient-centered healthcare with integrity and excellence.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-xl shadow-elevated">
                <h3 className="font-heading font-bold text-secondary-foreground text-xl mb-2">
                  Our Vision
                </h3>
                <p className="text-secondary-foreground/90 text-sm leading-relaxed">
                  To be the region's most trusted and preferred healthcare destination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
