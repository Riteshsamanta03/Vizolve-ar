import { useRef, useState } from "react";
import AnimatedSection from "./animations/AnimatedSection";
import AnimatedItem from "./animations/AnimatedItem";
import PremiumFeatureCard from "./PremiumFeatureCard";

/* Images */
import websiteImg from "@/assets/website.jpg";
import mobileDevImg from "@/assets/mobile-dev.webp";
import aiAutomationImg from "@/assets/ai-automation.jpg";
import aiAgentImg from "../assets/ai-agent.png";

const services = [
  {
    image: websiteImg,
    title: "Modern Web Solutions",
    description:
      "We craft fast, modern websites designed to deliver exceptional user experiences.",
    href: "/services/development",
  },
  {
    image: mobileDevImg,
    title: "Mobile App Solutions",
    description:
      "We create scalable, high-performance mobile apps with beautiful interfaces.",
    href: "/services/development",
  },
  {
    image: aiAutomationImg,
    title: "Smart AI Automation",
    description: "Smart AI-Powered Task Automation",
    href: "#",
  },
  {
    image: aiAgentImg,
    title: "Custom AI Agents",
    description: "Autonomous AI Assistants",
    href: "#",
  },
];

const Services = () => {

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* Detect active card */
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
      id="services"
      className="py-16 sm:py-24 lg:py-40 bg-[#050505]"
    >
      <div className="section-container px-4 sm:px-6">

        <AnimatedSection>

          {/* ===== Heading ===== */}
          <AnimatedItem>
            <div className="text-center mb-10 sm:mb-16 lg:mb-20">
              <p className="section-label justify-center mb-3">
                Our Services
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-semibold text-white">
                Thoughtful Digital{" "}
                <span className="text-primary">
                  Strategies
                </span>
              </h2>
            </div>
          </AnimatedItem>

          {/* ================= MOBILE SWIPE ================= */}
          <div className="sm:hidden">

            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="
                flex
                gap-4
                overflow-x-auto
                snap-x snap-mandatory
                scrollbar-hide
                pb-4
              "
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="
                    min-w-[100%]
                    snap-center
                    flex-shrink-0
                  "
                >
                  <PremiumFeatureCard {...service} />
                </div>
              ))}
            </div>

            {/* ===== DOT INDICATOR ===== */}
            <div className="flex justify-center gap-2 mt-4">
              {services.map((_, index) => (
                <div
                  key={index}
                  className={`
                    rounded-full transition-all duration-300
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
          <div className="hidden sm:grid grid-cols-2 gap-6">
            {services.map((service, index) => {
              const isFullWidth = index < 2;

              return (
                <div
                  key={index}
                  className={isFullWidth ? "col-span-2" : ""}
                >
                  <PremiumFeatureCard
                    {...service}
                    variant={isFullWidth ? "full" : "half"}
                  />
                </div>
              );
            })}
          </div>

        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;