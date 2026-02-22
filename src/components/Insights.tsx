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

/* ✅ Import Image */
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
      className="py-20 sm:py-28 lg:py-40 bg-[#0c0c0c]"
    >
      <div className="section-container">
        <AnimatedSection>

          <AnimatedItem>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <p className="section-label justify-center mb-4">
                Highlights
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white">
                The latest from{" "}
                <span className="text-primary">Vizolve</span>
              </h2>
            </div>
          </AnimatedItem>

          <div className="w-full flex justify-center items-center px-4">
            {insights.map((insight, index) => (
              <AnimatedItem key={index}>
                <RectangleCard
                  title={insight.title}
                  description={insight.description}
                  image={insight.image}
                  link={insight.link}
                  className="hidden lg:block"
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