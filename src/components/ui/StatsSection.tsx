import { Play } from "lucide-react";
import teamCollab from "@/assets/team-collab.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "10k+", label: "Completed Projects" },
  { value: "15k", label: "Satisfied Customers" },
  { value: "10k+", label: "Years Of Mastery" },
  { value: "45+", label: "Worldwide Honors" },
];

const StatsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
      <div ref={ref} className="opacity-0 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left - Image */}
        <div className="card-rounded img-hover-zoom">
          <img src={teamCollab} alt="Team at work" className="w-full h-72 md:h-96 object-cover rounded-2xl" />
        </div>

        {/* Right - Stats */}
        <div className="flex flex-col justify-center">
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-10">
            Tempor commodo ullamcorper a lacus. Amet commodo nulla facilisi nullam. Molestie
            nunc non blandit massa enim nec. Felis bibendum ut tristique et egestas quis ipsum
            suspendisse ultrices. Eros in cursus turpis massa tincidunt dui.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold text-foreground">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Avatars + play */}
          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              {[avatar1, avatar2, avatar3].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Team member"
                  className="w-10 h-10 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary">
                <Play className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="text-xs tracking-[0.2em] uppercase text-foreground font-medium">Watch Intro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
