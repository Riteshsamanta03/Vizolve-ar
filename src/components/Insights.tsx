import {
  ArrowRight,
  BookOpen,
  Eye,
  FileText,
  TrendingUp,
} from "lucide-react";

import AnimatedSection from "./animations/AnimatedSection";
import AnimatedItem from "./animations/AnimatedItem";
import RectangleCard from "./ReactangleCard";

/* Image */
import highlightImg from "@/assets/highlight.png";

/* Data */
const insights = [
  {
    image: highlightImg,
    label: "Research",
    title: "FASTCARE - Emergency Booking",
    description: "HealthCare at the speed of light",
    link: "https://fastcare.pages.dev/",
  },
];

const Insights = () => {
  return (
    <section
      id="insights"
      className="py-16 sm:py-24 lg:py-40 bg-[#0c0c0c]"
    >
      <div className="section-container px-4">

        <AnimatedSection>

          {/* Heading */}
          <AnimatedItem>
            <div className="text-center mb-10 sm:mb-14 lg:mb-20">
              <p className="section-label justify-center mb-3">
                Highlights
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-semibold text-white leading-snug">
                The latest from{" "}
                <span className="text-primary">Vizolve</span>
              </h2>
            </div>
          </AnimatedItem>

          {/* Card */}
          <div className="flex justify-center items-center w-full">
            {insights.map((insight, index) => (
              <AnimatedItem key={index}>
                <RectangleCard
                  title={insight.title}
                  description={insight.description}
                  image={insight.image}
                  link={insight.link}
                  className="
                    w-full
                    max-w-sm
                    sm:max-w-md
                    md:max-w-xl
                    lg:max-w-4xl
                  "
                />
              </AnimatedItem>
            ))}
          </div>

        </AnimatedSection>
      </div>
    </section>
  );
};

export default Insights;