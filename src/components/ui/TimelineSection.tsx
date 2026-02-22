import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import timelineOffice from "@/assets/timeline-office.jpg";
import timelineSmall from "@/assets/timeline-small.jpg";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const years = [
  { year: "2000", label: "Establishment & Foundation" },
  { year: "2005", label: "Market Expansion" },
  { year: "2010", label: "Digital Innovation" },
  { year: "2018", label: "Global Reach" },
  { year: "2023", label: "AI Integration" },
];

const TimelineSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useScrollAnimation();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#0c0c0c]">
      {/* Dark overlay bg */}
      <div className="absolute inset-0 bg-secondary/50" />

      <div
  ref={ref}
  className="opacity-0 relative z-10 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto"
>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

    {/* Left content */}
    <div>
      <div className="section-label mb-6">OUR PERSPECTIVES</div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
        Vizolve - Where  {" "}
        <span className="heading-highlight">innovation meets execution</span>{" "}
        
        and ideas scale into success.
      </h2>

      <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-8">
        Our mission is simple : to create smart, scalable solutions that solve real-world challenges. Whether through digital innovation, learning experiences, or consumer-focused ventures, Vizolve is built on the belief that progress should be intelligent, accessible, and meaningful.
      </p>

      {/* <button className="bg-primary hover:bg-[#ff5252] text-white font-medium px-6 py-3 text-base sm:text-lg rounded-[40px] transition-all duration-300 hover:scale-[1.03]">
        Know More
      </button> */}
    </div>


    {/* Right image */}
    <div className="relative flex justify-center lg:justify-end">
      <div className="card-rounded img-hover-zoom w-full max-w-[550px]">
        <img
          src={timelineOffice}
          alt="Office team"
          className="w-full h-[400px] lg:h-[400px] object-cover rounded-2xl grayscale"
        />
      </div>
    </div>

  </div>
</div>

            
            {/* Floating circular button */}
            {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-1/2">
              <div className="relative w-24 h-24 group cursor-pointer"> */}
                {/* Spinning text */}
                {/* <div className="absolute inset-0 animate-spin-slow">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <path id="circlePath" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                    </defs>
                    <text className="fill-muted-foreground text-[10px] uppercase tracking-[0.15em]">
                      <textPath href="#circlePath">• Get In Touch • Get In Touch • Get In Touch</textPath>
                    </text>
                  </svg>
                </div> */}
                {/* Center button */}
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div> */}


          
      
    </section>
  );
};

export default TimelineSection;
