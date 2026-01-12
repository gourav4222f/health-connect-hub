import { Phone, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const FloatingButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const phoneNumber = '917028855846';
  const whatsappMessage = 'Hello, I would like to book an appointment at Shree Ratan Siddhivinayaka Hospital.';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded Buttons */}
      <div className={`flex flex-col gap-3 transition-all duration-300 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        {/* Phone Button */}
        <a
          href={`tel:+${phoneNumber}`}
          className="group flex items-center gap-3"
        >
          <span className="bg-card px-3 py-2 rounded-lg shadow-elevated text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Call Us Now
          </span>
          <div className="w-14 h-14 rounded-full bg-primary shadow-elevated flex items-center justify-center hover:scale-110 transition-transform">
            <Phone className="w-6 h-6 text-primary-foreground" />
          </div>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3"
        >
          <span className="bg-card px-3 py-2 rounded-lg shadow-elevated text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat on WhatsApp
          </span>
          <div className="w-14 h-14 rounded-full bg-[#25D366] shadow-elevated flex items-center justify-center hover:scale-110 transition-transform">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
        </a>
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-16 h-16 rounded-full shadow-elevated flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isExpanded ? 'bg-destructive rotate-0' : 'bg-secondary animate-pulse-slow'
        }`}
        aria-label={isExpanded ? 'Close contact options' : 'Open contact options'}
      >
        {isExpanded ? (
          <X className="w-7 h-7 text-destructive-foreground" />
        ) : (
          <MessageCircle className="w-7 h-7 text-secondary-foreground" />
        )}
      </button>

      {/* Pulse Ring Animation */}
      {!isExpanded && (
        <>
          <span className="absolute bottom-0 right-0 w-16 h-16 rounded-full bg-secondary/40 animate-ping" />
          <span className="absolute bottom-0 right-0 w-16 h-16 rounded-full bg-secondary/20 animate-pulse" />
        </>
      )}
    </div>
  );
};

export default FloatingButtons;
