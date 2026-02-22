import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import teamMemberLara from "@/assets/team-member-lara.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import timelineSmall from "@/assets/timeline-small.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const members = [
  { id: "01", name: "Julia", role: "Brand Strategist", image: timelineSmall },
  { id: "02", name: "Lara", role: "Data Scientist", image: teamMemberLara },
  { id: "03", name: "Robert", role: "UX/UI Designer", image: avatar1 },
  { id: "04", name: "Sara", role: "Web Developer", image: avatar2 },
  { id: "05", name: "Steve", role: "Graphic Designer", image: avatar3 },
];

const TeamSection = () => {
  const [activeIdx, setActiveIdx] = useState(1);
  const ref = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
      <div ref={ref} className="opacity-0 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        {/* Left - Info */}
        <div>
          <div className="section-label mb-6">DESIGN THINKERS</div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
            Crafts Visionary Ideas{" "}
            <span className="heading-highlight">That Inspire</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm mb-8">
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus elit.
          </p>
          <div className="flex gap-3">
            <button className="btn-primary-vizolve text-sm">View All Teams</button>
            <button className="btn-outline-vizolve text-sm">Join Our Team</button>
          </div>
        </div>

        {/* Center - Member list */}
        <div className="flex flex-col justify-center">
          {members.map((m, i) => (
            <button
              key={m.id}
              onClick={() => setActiveIdx(i)}
              className={`flex items-center justify-between py-5 border-b border-border transition-colors duration-300 group ${
                i === activeIdx ? "text-primary" : "text-foreground hover:text-muted-foreground"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">{m.id}</span>
                <span className="text-lg md:text-xl font-bold">{m.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">{m.role}</span>
                {i === activeIdx && (
                  <ArrowUpRight className="w-4 h-4 text-primary" />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Right - Circular image */}
        <div className="flex items-center justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Yellow circle bg */}
            <div className="absolute inset-0 rounded-full bg-amber-400 translate-x-6 translate-y-2" />
            {/* Image */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <img
                src={members[activeIdx].image}
                alt={members[activeIdx].name}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
            {/* Small black circle */}
            <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-background" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
