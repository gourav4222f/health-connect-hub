import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What are the visiting hours at SRS Hospital?',
    answer: 'General visiting hours are from 10:00 AM to 12:00 PM and 4:00 PM to 7:00 PM. ICU visiting hours are limited to 11:00 AM - 12:00 PM and 5:00 PM - 6:00 PM. Please check with the reception for any specific department timings.',
  },
  {
    question: 'How can I book an appointment with a specialist?',
    answer: 'You can book an appointment by calling our reception at +91 98765 43210, through WhatsApp, or by visiting our hospital directly. We also offer online appointment booking for your convenience.',
  },
  {
    question: 'Do you accept health insurance?',
    answer: 'Yes, we accept most major health insurance policies including government schemes like Ayushman Bharat. Please contact our insurance desk for a complete list of accepted policies and cashless facility.',
  },
  {
    question: 'What emergency services do you provide?',
    answer: 'Our emergency department operates 24/7 with trauma care, cardiac emergency, accident & emergency services, and ambulance services. We have a dedicated team of emergency physicians and surgeons available round the clock.',
  },
  {
    question: 'What diagnostic facilities are available?',
    answer: 'We have a fully equipped diagnostic center with digital X-ray, ultrasound, CT scan, MRI, ECG, pathology lab, and more. Most reports are available within 24 hours, with urgent reports delivered faster.',
  },
  {
    question: 'Are there any special packages for health check-ups?',
    answer: 'Yes, we offer various health check-up packages including basic, comprehensive, cardiac, diabetic, and senior citizen packages. Contact our health desk for package details and pricing.',
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding gradient-accent">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Find answers to common questions about our services, facilities, 
              and policies. If you can't find what you're looking for, feel free 
              to contact us directly.
            </p>

            <div className="bg-card p-6 rounded-xl shadow-card">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                Still have questions?
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Our friendly staff is here to help you 24/7.
              </p>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                Call us: +91 98765 43210
              </a>
            </div>
          </div>

          {/* Right - Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl px-6 shadow-card border-none data-[state=open]:shadow-elevated transition-shadow"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
