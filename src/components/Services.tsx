import AnimatedSection from "./animations/AnimatedSection";
import AnimatedItem from "./animations/AnimatedItem";
import PremiumFeatureCard from "./PremiumFeatureCard";

/* Images */
import websiteImg from "@/assets/website.jpg";
import mobileDevImg from "@/assets/mobile-dev.webp";
import aiAutomationImg from "@/assets/ai-automation.jpg";
import aiAgentImg from "@/assets/ai-agent.png";

/* ================= SERVICES DATA ================= */

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
  return (
    <section
      id="services"
      className="py-16 sm:py-24 lg:py-40 bg-[#050505]"
    >
      <div className="section-container px-4 sm:px-6">

        <AnimatedSection>

          {/* ================= HEADING ================= */}
          <AnimatedItem>
            <div className="text-center mb-10 sm:mb-16 lg:mb-20">

              <p className="section-label justify-center mb-3">
                Our Services
              </p>

              <h2 className="
                text-2xl
                sm:text-3xl
                lg:text-[44px]
                font-semibold
                text-white
                leading-snug
              ">
                Thoughtful Digital{" "}
                <span className="text-primary">
                  Strategies
                </span>
              </h2>

            </div>
          </AnimatedItem>

          {/* ================= MOBILE STACK ================= */}
        <div className="sm:hidden flex flex-col gap-4">

            {services.map((service, index) => (
              <AnimatedItem key={index}>
                {/* Increased visual height */}
                
                  <PremiumFeatureCard {...service} />
                
              </AnimatedItem>
            ))}

          </div>

          {/* ================= DESKTOP GRID ================= */}
          <div className="hidden sm:grid grid-cols-2 gap-3">

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