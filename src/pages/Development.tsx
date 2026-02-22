import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/animations/PageTransition';
import AnimatedSection from '@/components/animations/AnimatedSection';
import AnimatedItem from '@/components/animations/AnimatedItem';

import heroImage from '@/assets/dev-hero.avif';
import webDevImage from '@/assets/web-dev.jpg';
import mobileDevImage from '@/assets/mobile-dev.jpg';

const webFeatures = ['Enhanced security', 'Responsive design', 'SEO-friendly structure', 'Scalable backend', '3 months free maintenance'];
const mobileFeatures = ['Android & iOS support', 'Secure API integration', 'High reliability', 'Performance optimization', '3 months free maintenance'];
const whyChooseUs = ['One team for web and mobile', 'Consistent UI/UX across platforms', 'Secure and reliable systems', 'Scalable solutions', 'Dedicated post-launch support'];
const pricingPlans = [
  { name: 'Basic Web / App', price: '₹14,999', description: 'Perfect for startups getting started online', features: ['Basic website or mobile app', 'Responsive UI', 'Standard security', 'Core features', '3 months free maintenance'], cta: 'Book Consultation', popular: false },
  { name: 'Professional Web & App', price: '₹29,999', description: 'Ideal for businesses needing both web and mobile presence', features: ['Website + mobile app', 'Custom UI/UX', 'Enhanced security', 'Performance optimization', 'Scalable architecture', '3 months free maintenance'], cta: 'Book Consultation', popular: true },
  { name: 'Enterprise Web & Mobile', price: 'Custom', description: 'For large organizations with complex requirements', features: ['Fully custom solutions', 'Enterprise-grade security', 'High scalability', 'Dedicated support', 'Long-term maintenance'], cta: 'Contact Us', popular: false },
];

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};
const heroItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const Development = () => {
  return (
    <PageTransition>
      <Header />
      <div className="min-h-screen bg-[#050505]">
        

        {/* Hero */}
        <section className="relative">
          <div className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]">
            <div className="absolute inset-0">
              <img src={heroImage} alt="Web and mobile development" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/70 to-[#050505]/50" />
            </div>
            <div className="relative z-10 section-container min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] pt-16 sm:pt-20 lg:pt-24 flex items-start justify-start">
              <motion.div className="max-w-2xl py-12 sm:py-16 lg:py-24" variants={heroContainerVariants} initial="hidden" animate="visible">
                <motion.p variants={heroItemVariants} className="section-label mb-6">Development</motion.p>
                <motion.h1 variants={heroItemVariants} className="text-3xl sm:text-5xl lg:text-[56px] xl:text-[64px] font-bold text-white mb-4 leading-[1.1] tracking-[-1px]">
                  Website & Mobile App <span className="text-primary">Development</span>
                </motion.h1>
                <motion.p variants={heroItemVariants} className="text-base sm:text-lg lg:text-xl text-[#a1a1aa] mb-6 sm:mb-8">
                  Secure, reliable, and scalable web and mobile solutions for businesses of every size.
                </motion.p>
                <motion.div variants={heroItemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button asChild className="bg-primary hover:bg-[#ff5252] text-white px-7 py-5 text-base font-medium rounded-[40px] transition-all duration-300 hover:scale-[1.03]">
                    <Link to="/contact">Book Consultation</Link>
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white bg-transparent px-7 py-5 text-base font-medium rounded-[40px] transition-all duration-300 hover:bg-white/10" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                    View Pricing
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Build */}
        <section className="py-20 sm:py-28 lg:py-40 bg-[#0c0c0c]">
          <div className="section-container">
            <AnimatedSection>
              <AnimatedItem>
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                  <p className="section-label justify-center mb-4">Our Expertise</p>
                  <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white mb-4">What We <span className="text-primary">Build</span></h2>
                  <p className="text-[#a1a1aa] text-base sm:text-lg max-w-2xl mx-auto">Comprehensive web and mobile development services to power your digital presence.</p>
                </div>
              </AnimatedItem>

              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                {[{ image: webDevImage, alt: 'Website development', title: 'Website Development', desc: 'We develop fast, secure, and SEO-friendly websites using modern frameworks and clean architecture, ensuring long-term performance and easy maintenance.', features: webFeatures },
                  { image: mobileDevImage, alt: 'Mobile app development', title: 'Mobile App Development', desc: 'We build reliable Android and iOS applications with intuitive user interfaces and scalable architecture, designed for performance and future growth.', features: mobileFeatures }
                ].map((item, idx) => (
                  <AnimatedItem key={idx}>
                    <div className="card-dark overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <img src={item.image} alt={item.alt} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-6 sm:p-8">
                        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">{item.title}</h3>
                        <p className="text-[#a1a1aa] mb-5 leading-relaxed text-sm sm:text-base">{item.desc}</p>
                        <ul className="space-y-2.5">
                          {item.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-3">
                              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center">
                                <Check className="w-3 h-3 text-primary" />
                              </div>
                              <span className="text-white/80 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AnimatedItem>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Why Choose Vizolve */}
        <section className="py-20 sm:py-28 lg:py-40 bg-[#050505]">
          <div className="section-container">
            <AnimatedSection>
              <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
                <AnimatedItem>
                  <div>
                    <p className="section-label mb-4">Our Advantage</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white mb-4 sm:mb-6">Why Choose <span className="text-primary">Vizolve</span></h2>
                    <p className="text-[#a1a1aa] text-base sm:text-lg mb-6 sm:mb-8">We combine technical excellence with business understanding to deliver web and mobile solutions that drive results.</p>
                    <ul className="space-y-3 sm:space-y-4">
                      {whyChooseUs.map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <span className="text-white font-medium text-sm sm:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedItem>
                <AnimatedItem>
                  <div className="card-dark p-8 sm:p-10 lg:p-12">
                    <div className="space-y-8">
                      {[
                        { value: '1+', label: 'Apps & Websites Delivered' },
                        { value: '100%', label: 'Client Satisfaction' },
                        { value: '24/7', label: 'Support Available' },
                      ].map((stat, i) => (
                        <div key={i}>
                          <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-1">{stat.value}</p>
                          <p className="text-[#a1a1aa] text-base">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedItem>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 sm:py-28 lg:py-40 bg-[#0c0c0c]">
          <div className="section-container">
            <AnimatedSection>
              <AnimatedItem>
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                  <p className="section-label justify-center mb-4">Pricing</p>
                  <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white mb-4">Transparent <span className="text-primary">Pricing</span></h2>
                  <p className="text-[#a1a1aa] text-base sm:text-lg max-w-2xl mx-auto">Choose the plan that fits your business needs. All plans include our commitment to quality and support.</p>
                </div>
              </AnimatedItem>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {pricingPlans.map((plan, index) => (
                  <AnimatedItem key={index}>
                    <div className={`relative card-dark p-6 sm:p-8 h-full flex flex-col ${plan.popular ? 'ring-2 ring-primary shadow-[0_0_30px_rgba(255,59,59,0.15)]' : ''}`}>
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                          <span className="bg-primary text-white px-4 py-1.5 rounded-full text-xs font-medium">Recommended</span>
                        </div>
                      )}
                      <div className="text-center mb-6 sm:mb-8">
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{plan.name}</h3>
                        <p className="text-[#6b7280] text-sm mb-4">{plan.description}</p>
                        <div className="text-3xl sm:text-4xl font-bold text-white">{plan.price}</div>
                      </div>
                      <ul className="space-y-3 mb-8 flex-1">
                        {plan.features.map((feature, fi) => (
                          <li key={fi} className="flex items-center gap-3">
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-[#a1a1aa] text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild className={`w-full py-5 text-base font-medium rounded-[10px] transition-all duration-300 hover:scale-[1.02] ${plan.popular ? 'bg-primary hover:bg-[#ff5252] text-white' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}>
                        <Link to="/contact">{plan.cta}</Link>
                      </Button>
                    </div>
                  </AnimatedItem>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Final CTA */}
        {/* <section className="py-20 sm:py-28 lg:py-40 bg-[#050505]">
          <div className="section-container text-center">
            <AnimatedSection>
              <AnimatedItem>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white mb-4 sm:mb-6">
                  Build powerful solutions with <span className="text-primary">Vizolve</span>
                </h2>
              </AnimatedItem>
              <AnimatedItem>
                <p className="text-[#a1a1aa] text-base sm:text-lg mb-8 max-w-2xl mx-auto">Let's discuss your project and create something amazing together.</p>
              </AnimatedItem>
              <AnimatedItem>
                <Button asChild className="bg-primary hover:bg-[#ff5252] text-white px-8 py-6 text-base font-medium rounded-[10px] transition-all duration-300 hover:scale-[1.03]">
                  <Link to="/contact">
                    Book Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </AnimatedItem>
            </AnimatedSection>
          </div>
        </section> */}

        
      </div>
      <Footer />
    </PageTransition>
  );
};

export default Development;
