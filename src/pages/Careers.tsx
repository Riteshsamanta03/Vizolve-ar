import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/animations/PageTransition";
import careersBg from "@/assets/careers-bg.avif";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const Careers = () => {
  return (
    <PageTransition>
       <Header />
      <div className="flex flex-col bg-[#050505]">
       
        <section className="relative h-screen flex items-center">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${careersBg})` }}>
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/60 to-[#050505]/90" />
          </div>
          <div className="relative z-10 section-container flex items-center justify-center">
            <motion.div className="max-w-xl sm:max-w-2xl lg:max-w-3xl text-center px-4" variants={containerVariants} initial="hidden" animate="visible">
              <motion.p variants={itemVariants} className="section-label justify-center mb-6">
                Careers
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg sm:text-xl text-[#a1a1aa] mb-4 sm:mb-6">
                Welcome to Careers at Vizolve.
              </motion.p>
              <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold text-white mb-6 sm:mb-8 leading-tight tracking-[-1px]">
                Coming <span className="text-primary">Soon</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed max-w-sm sm:max-w-xl mx-auto">
                We believe great software is built by curious minds. Our career opportunities are launching soon for
                developers who want to learn, build, and grow with us.
              </motion.p>
            </motion.div>
          </div>
        </section>
        
      </div>
      <Footer />
    </PageTransition>
  );
};

export default Careers;
