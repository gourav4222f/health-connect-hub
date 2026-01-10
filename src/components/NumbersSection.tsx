import { useEffect, useState, useRef } from 'react';
import { Users, Award, Clock, Stethoscope } from 'lucide-react';

const stats = [
  { icon: Users, value: 50000, suffix: '+', label: 'Happy Patients' },
  { icon: Stethoscope, value: 50, suffix: '+', label: 'Expert Doctors' },
  { icon: Award, value: 15, suffix: '+', label: 'Years Experience' },
  { icon: Clock, value: 24, suffix: '/7', label: 'Emergency Care' },
];

const useCountUp = (end: number, duration: number = 2000, shouldStart: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return count;
};

const StatCard = ({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) => {
  const count = useCountUp(stat.value, 2000, isVisible);

  return (
    <div className="text-center group">
      <div className="w-20 h-20 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        <stat.icon className="w-10 h-10 text-primary-foreground" />
      </div>
      <div className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
        {count.toLocaleString()}
        {stat.suffix}
      </div>
      <p className="text-primary-foreground/80 font-medium">{stat.label}</p>
    </div>
  );
};

const NumbersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 gradient-hero">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;
