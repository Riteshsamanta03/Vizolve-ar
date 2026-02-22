import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.avif';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/70 to-[#050505]/95" />
      </div>

      <div className="relative z-10 section-container py-32 lg:py-40">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="section-label justify-center mb-4">Our Mission</p>
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-[64px] font-bold text-white leading-[1.1] mb-6 sm:mb-8 tracking-[-1px]"
          >
            Turning vision{' '}
            <span className="text-primary">into solutions</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-[#a1a1aa] mb-8 sm:mb-10 max-w-2xl leading-relaxed"
          >
            From Responsive web & mobile apps to Intelligent AI Automation, We build the tech that drives your success
          </motion.p>
          <motion.div variants={itemVariants} className="flex-col gap-4 items-start justify-start flex sm:flex-row">
            <Button
              size="lg"
              className="bg-primary hover:bg-[#ff5252] text-white font-medium px-7 py-6 text-base sm:text-lg rounded-[40px] transition-all duration-300 hover:scale-[1.03]"
              onClick={() => {
                const servicesSection = document.getElementById('services');
                servicesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white bg-transparent hover:bg-white/10 transition-all duration-300 hover:scale-[1.03] px-7 py-6 text-base sm:text-lg font-medium rounded-[40px]"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/40 rounded-full" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
