import { ArrowRight } from "lucide-react";
import iconResolution from "@/assets/icon-resolution.png";
import iconReputable from "@/assets/icon-reputable.png";
import iconAssistance from "@/assets/icon-assistance.png";
import iconReach from "@/assets/icon-reach.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = [
  {
    title: "RESOLUTION",
    desc: "Our Experts Deliver All Solutions",
    icon: iconResolution,
    accent: true,
  },
  {
    title: "REPUTABLE",
    desc: "Develop, Engross & Fulfill Service",
    icon: iconReputable,
    accent: false,
  },
  {
    title: "ASSISTANCE",
    desc: "24/7 Instantaneous Customer Service",
    icon: iconAssistance,
    accent: false,
  },
  {
    title: "REACH",
    desc: "Conveniently Reachable Globally",
    icon: iconReach,
    accent: false,
  },
];

const ValuesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
      <div ref={ref} className="opacity-0">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-4">OUR PORTFOLIO</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Thoughtful Digital{" "}
            <span className="heading-highlight">Strategies</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className={`rounded-[40px] p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 cursor-pointer group ${
                v.accent
                  ? "bg-primary text-primary-foreground"
                  : "bg-foreground/95 text-background"
              }`}
              style={{ minHeight: 340 }}
            >
              <img
                src={v.icon}
                alt={v.title}
                className="w-20 h-20 object-contain mb-8"
              />
              <span className="text-xs tracking-[0.25em] uppercase font-semibold mb-4 opacity-80">
                {v.title}
              </span>
              <p className="font-bold text-base mb-8">{v.desc}</p>
              <div className="mt-auto">
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
