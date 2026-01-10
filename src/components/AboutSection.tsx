import { Heart, Shield, Users, Award } from 'lucide-react';

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

const AboutSection = () => {
  return (
    <section id="about" className="section-padding gradient-accent">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
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
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With a team of experienced doctors, modern infrastructure, and a 
              patient-first approach, we have become a beacon of hope for thousands 
              of families. Our commitment to excellence drives us to continuously 
              improve and innovate in medical care.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h3 className="font-heading font-bold text-primary text-xl mb-2">
                  Our Mission
                </h3>
                <p className="text-muted-foreground text-sm">
                  To deliver compassionate, patient-centered healthcare with integrity.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h3 className="font-heading font-bold text-secondary text-xl mb-2">
                  Our Vision
                </h3>
                <p className="text-muted-foreground text-sm">
                  To be the region's most trusted healthcare destination.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
