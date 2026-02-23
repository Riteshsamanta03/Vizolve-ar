import {
  Target,
  Shield,
  Lightbulb,
  Zap,
  Users,
  BarChart3,
} from "lucide-react";

import AnimatedSection from "./animations/AnimatedSection";
import AnimatedItem from "./animations/AnimatedItem";
import SquareCard from "./SquareCard";

/* Images */
import strategicImg from "@/assets/stratigic.jpeg";
import secureScaleImg from "@/assets/secure-scale.jpeg";
import industryReadyImg from "@/assets/Industry-ready.jpeg";
import aiCardImg from "@/assets/AI-card.jpeg";
import deliveryImg from "@/assets/delivery.jpeg";
import measurableImg from "@/assets/measurable-outcome.jpeg";
import futureReadyImg from "@/assets/future-ready.jpeg";
import clientFocusImg from "@/assets/client-focus.jpeg";

/* Data */
const differentiators = [
  {
    image: strategicImg,
    label: "Strategy",
    title: "Strategic Consulting",
    description: "Business aligned IT solutions",
  },
  {
    image: secureScaleImg,
    label: "Security",
    title: "Secure Scaling",
    description: "Enterprise grade security",
  },
  {
    image: industryReadyImg,
    label: "Expertise",
    title: "Industry-Ready",
    description: "Cross industry knowledge",
  },
  {
    image: aiCardImg,
    label: "Innovation",
    title: "AI Innovation",
    description: "Advanced intelligent automation",
  },
  {
    image: deliveryImg,
    label: "Delivery",
    title: "Reliable Delivery",
    description: "Consistent timely project delivery",
  },
  {
    image: measurableImg,
    label: "Results",
    title: "Measurable Outcomes",
    description: "Data-driven results",
  },
  {
    image: futureReadyImg,
    label: "Futuristic",
    title: "Future Ready",
    description: "Modern scalable solutions",
  },
  {
    image: clientFocusImg,
    label: "Collab",
    title: "Client Focused",
    description: "Transparent client partnership",
  },
];

const WhyVizolve = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 lg:py-40 bg-[#050505]"
    >
      <div className="section-container px-4 sm:px-6">

        <AnimatedSection>

          {/* ================= Heading ================= */}
          <AnimatedItem>
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 lg:mb-20">

              <p className="section-label justify-center mb-3">
                Why Choose Us
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-semibold text-white mb-4 leading-snug">
                Why Organizations Choose{" "}
                <span className="text-primary">
                  Vizolve
                </span>
              </h2>

              <p className="text-sm sm:text-lg text-[#a1a1aa] leading-relaxed">
                A trusted technology partner committed to delivering
                scalable, secure and innovation-driven digital solutions.
              </p>

            </div>
          </AnimatedItem>

          {/* ================= Cards Grid ================= */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-5
              sm:gap-6
              lg:gap-8
            "
          >
            {differentiators.map((item, index) => (
              <AnimatedItem key={index}>
                <SquareCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  className="w-full h-full"
                />
              </AnimatedItem>
            ))}
          </div>

        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyVizolve;