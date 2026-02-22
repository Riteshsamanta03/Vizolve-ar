import AnimatedSection from './animations/AnimatedSection';
import AnimatedItem from './animations/AnimatedItem';

// const logos = ['TechCorp', 'InnovateLabs', 'GlobalFinance', 'HealthFirst', 'EduTech', 'ScaleUp'];
const logos = ['Partnering with startups and growing businesses worldwide.'];
const TrustedBy = () => {
  return (
    <section className="py-10 sm:py-14 bg-[#0c0c0c] border-b border-white/5">
      <div className="section-container">
        <AnimatedSection>
          <AnimatedItem>
            <p className="section-label justify-center mb-8 sm:mb-12">
              Trusted Partnerships
            </p>
          </AnimatedItem>
          <AnimatedItem>
            <div className="flex flex-wrap items-center justify-center gap-x-10 sm:gap-x-14 lg:gap-x-20 xl:gap-x-28 gap-y-4 sm:gap-y-6">
              {logos.map((logo, index) => (
                <span key={index} className="text-base sm:text-lg lg:text-xl font-medium text-white/20 tracking-wide hover:text-white/40 transition-colors duration-300">
                  {logo}
                </span>
              ))}
            </div>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TrustedBy;
