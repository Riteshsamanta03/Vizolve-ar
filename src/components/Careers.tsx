import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedSection from './animations/AnimatedSection';
import AnimatedItem from './animations/AnimatedItem';
import heroBg from "@/assets/hero-bg.avif";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <section id="careers" className="py-20 sm:py-28 lg:py-40 bg-[#050505]">
      <div className="section-container">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <AnimatedItem>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border ">
                <img src={heroBg} alt="Join Vizolve" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/40 to-transparent flex-col p-6 sm:p-8 lg:p-12 flex items-center justify-end">
                  <p className="text-2xl sm:text-3xl font-light text-white/70">Build your future with us</p>
                </div>
              </div>
            </AnimatedItem>

            <AnimatedItem>
              <div className="lg:pl-8">
                <p className="section-label mb-4">Careers</p>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white mb-4 sm:mb-6">
                  Join <span className="text-primary italic">Us</span>
                </h2>
                <p className="text-base sm:text-lg text-[#a1a1aa] mb-6 sm:mb-8 leading-relaxed">
                  Deciding the career for you is more than simply "landing the job." It's finding a place where you know you
                  make a difference each day, where you can be your most authentic self. It's choosing your impact.
                </p>
                <Button className="bg-primary hover:bg-[#ff5252] text-white px-7 py-5 text-base font-medium group rounded-[40px] transition-all duration-300 hover:scale-[1.03]">
                  <Link to="/careers">
                  Explore careers
                   
                  </Link>
                </Button>
              </div>
            </AnimatedItem>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Careers;
