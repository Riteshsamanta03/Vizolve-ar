import {
  Rocket,
  Building2,
  Building,
  GraduationCap,
  HeartPulse,
  Wallet,
} from "lucide-react";

import AnimatedSection from "./animations/AnimatedSection";
import AnimatedItem from "./animations/AnimatedItem";
import PillCard from "./PillCard";

/* ✅ Import Images */
import growthImg from "@/assets/growth.jpg";
import businessImg from "@/assets/business.webp";
import educationImg from "@/assets/education.jpg";
import healthImg from "@/assets/health.png";
import financeImg from "@/assets/finance.jpeg";

/* Industries Data */
const industries = [
  {
    image: growthImg,
    label: "Growth",
    title: "Startups & small enterprises",
    description: "Rapid development and scalable architecture",
  },
  {
    image: businessImg,
    label: "Business",
    title: "Medium & Large Businesses",
    description: "Digital solutions for operational efficiency",
  },
  {
    image: educationImg,
    label: "Education",
    title: "Education & EdTech",
    description: "Learning platforms and ed-tech solutions",
  },
  {
    image: healthImg,
    label: "Health",
    title: "Healthcare",
    description: "Advanced healthcare solutions for modern needs",
  },
  {
    image: financeImg,
    label: "Finance",
    title: "Finance & FinTech",
    description: "Secure financial apps and payments",
  },
];

const Industries = () => {
  return (
    <section
      id="industries"
      className="py-20 sm:py-28 lg:py-40 bg-[#0c0c0c]"
    >
      <div className="section-container">
        <AnimatedSection>
          <AnimatedItem>
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
              <p className="section-label justify-center mb-4">
                Industries
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white mb-4 sm:mb-6">
                Industries We{" "}
                <span className="text-primary">Serve</span>
              </h2>

              <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed">
                Deep domain expertise across diverse sectors,
                enabling tailored solutions for unique challenges.
              </p>
            </div>
          </AnimatedItem>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
            {industries.map((industry, index) => (
              <AnimatedItem key={index}>
                <PillCard
                  image={industry.image}
                  label={industry.label}
                  title={industry.title}
                  description={industry.description}
                />
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Industries;