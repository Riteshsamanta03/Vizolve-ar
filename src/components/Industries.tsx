import { useRef, useState } from "react";
import AnimatedSection from "./animations/AnimatedSection";
import AnimatedItem from "./animations/AnimatedItem";
import PillCard from "./PillCard";

/* Images */
import growthImg from "@/assets/growth.jpg";
import businessImg from "@/assets/business.webp";
import educationImg from "@/assets/education.jpg";
import healthImg from "@/assets/health.png";
import financeImg from "@/assets/finance.jpeg";

/* Data */
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
    description: "Advanced healthcare solutions",
  },
  {
    image: financeImg,
    label: "Finance",
    title: "Finance & FinTech",
    description: "Secure financial apps and payments",
  },
];

const Industries = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* Detect active card while scrolling */
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const index = Math.round(
      container.scrollLeft / container.offsetWidth
    );

    setActiveIndex(index);
  };

  return (
    <section
      id="industries"
      className="py-16 sm:py-24 lg:py-40 bg-[#0c0c0c]"
    >
      <div className="section-container px-4 sm:px-6">

        <AnimatedSection>

          {/* ===== Heading ===== */}
          <AnimatedItem>
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 lg:mb-20">
              <p className="section-label justify-center mb-3">
                Industries
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-semibold text-white mb-4">
                Industries We <span className="text-primary">Serve</span>
              </h2>

              <p className="text-sm sm:text-lg text-[#a1a1aa]">
                Deep domain expertise across diverse sectors.
              </p>
            </div>
          </AnimatedItem>

          {/* ================= MOBILE CAROUSEL ================= */}
          <div className="sm:hidden">

            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="
                flex
                overflow-x-auto
                snap-x snap-mandatory
                scrollbar-hide
              "
            >
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="
                    w-full
                    flex-shrink-0
                    snap-center
                    px-2
                  "
                >
                  <PillCard {...industry} />
                </div>
              ))}
            </div>

            {/* ===== DOT INDICATOR ===== */}
            <div className="flex justify-center gap-2 mt-5">
              {industries.map((_, index) => (
                <div
                  key={index}
                  className={`
                    transition-all duration-300 rounded-full
                    ${
                      activeIndex === index
                        ? "w-6 h-2 bg-primary"
                        : "w-2 h-2 bg-white/30"
                    }
                  `}
                />
              ))}
            </div>

          </div>

          {/* ================= DESKTOP GRID ================= */}
          <div className="
            hidden sm:grid
            grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-5
            gap-8
            justify-items-center
          ">
            {industries.map((industry, index) => (
              <AnimatedItem key={index}>
                <PillCard {...industry} />
              </AnimatedItem>
            ))}
          </div>

        </AnimatedSection>
      </div>
    </section>
  );
};

export default Industries;