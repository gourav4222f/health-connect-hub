import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '@/assets/logo-shree-ratan.png';

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Our Doctors', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact' },
];

const services = [
  'Cardiology',
  'Neurology',
  'Orthopedics',
  'Pediatrics',
  'General Medicine',
  'Emergency Care',
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Hospital Info */}
          <div>
            <img src={logo} alt="SRS Hospital" className="h-16 mb-6 bg-white/10 p-2 rounded-lg" />
            <p className="text-primary-foreground/80 text-sm mb-6 leading-relaxed">
              Shree Ratan Siddhivinayka Hospital provides comprehensive healthcare 
              services with a commitment to excellence and compassionate care.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  Averni Chauraha, Jugsana Road, Baldeo, Mathura 281301
                </span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="tel:+917028855846" className="text-primary-foreground/80 hover:text-secondary">
                  +91 70288 55846 | +91 92050 69846
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:dr.djj0103@gmail.com" className="text-primary-foreground/80 hover:text-secondary">
                  dr.djj0103@gmail.com
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Emergency: 24/7 | OPD: 9 AM - 8 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>
            © {currentYear} Shree Ratan Siddhivinayka Hospital. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-secondary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
