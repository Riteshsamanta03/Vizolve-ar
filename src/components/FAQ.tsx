import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import AnimatedSection from './animations/AnimatedSection';
import AnimatedItem from './animations/AnimatedItem';

const faqs = [
  { question: 'How do we start a project with Vizolve?', answer: 'Getting started is simple. Reach out through our contact form or schedule a consultation. We\'ll discuss your requirements, assess the scope, and provide a detailed proposal outlining timeline, deliverables, and investment.' },
  { question: 'Do you provide post-launch support and maintenance?', answer: 'Absolutely. We offer comprehensive support and maintenance packages to ensure your solutions continue to perform optimally. This includes bug fixes, security updates, performance monitoring, and feature enhancements.' },
  { question: 'Can your solutions scale as our business grows?', answer: 'All our solutions are built with scalability in mind. We use modern cloud architectures, microservices patterns, and best practices that allow your applications to handle increased load and complexity as your business expands.' },
  { question: 'Do you build custom AI solutions?', answer: 'Yes, we specialize in custom AI development. From intelligent automation workflows to sophisticated AI agents, we build purpose-built AI solutions tailored to your specific business processes and requirements.' },
  { question: 'What industries do you have experience in?', answer: 'We have deep expertise across multiple sectors including startups, SMBs, enterprises, education, healthcare, and fintech. Our team brings industry-specific knowledge to every engagement.' },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 sm:py-28 lg:py-40 bg-[#0c0c0c]">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <AnimatedItem>
              <div className="text-center mb-12 sm:mb-16">
                <p className="section-label justify-center mb-4">FAQ</p>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white">
                  Frequently Asked <span className="text-primary">Questions</span>
                </h2>
              </div>
            </AnimatedItem>

            <AnimatedItem>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="card-dark px-5 sm:px-7 border-0 data-[state=open]:border-primary/30"
                  >
                    <AccordionTrigger className="text-left font-medium text-white hover:text-primary hover:no-underline py-5 sm:py-6 text-sm sm:text-base lg:text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#a1a1aa] pb-5 sm:pb-6 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
